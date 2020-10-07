import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  Compiler,
  OnDestroy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { tap, filter, takeUntil, map, switchMap } from 'rxjs/operators';
import { GridSizes } from '../../../shared/static-files/enums';
import { GridService } from '../../../shared/services/grid/grid.service';
import { Subject, combineLatest, of, forkJoin } from 'rxjs';
import { GameService } from '../../../shared/modules/home/modules/game/services/game.service';
import { Game } from '../../../shared/interfaces/game.interface';
import { WebsocketService } from '../../../shared/services/websocket/websocket.service';
import { Environment } from '../../../../environments/environment';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss'],
})
export class MainContentComponent implements OnInit, OnDestroy {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private gridService: GridService,
    private compiler: Compiler,
    private changeDetectorRef: ChangeDetectorRef,
    private gameService: GameService,
    private websocketService: WebsocketService,
    private ngZone: NgZone
  ) {}

  @ViewChild('mobileContent', { read: ViewContainerRef, static: false })
  public mobileContentContainer: ViewContainerRef;

  @ViewChild('largeScreenContent', { read: ViewContainerRef, static: false })
  public largeScreenContentContainer: ViewContainerRef;

  public activeView: string;

  private destory$: Subject<void> = new Subject();

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() =>
      this.websocketService.connect(new Environment().environment.backendUrl)
    );

    this.gridService
      .gridChangeObservable()
      .pipe(
        filter(
          (activeGridSize: GridSizes) =>
            activeGridSize !== GridSizes.EXTRA_SMALL &&
            this.activeView !== 'large-screen'
        ),
        tap(() => (this.activeView = 'large-screen')),
        tap(() => this.changeDetectorRef.detectChanges()),
        filter(
          () =>
            !this.largeScreenContentContainer ||
            this.largeScreenContentContainer.length === 0
        ),
        tap(() => this.createLargeScreenConent()),
        takeUntil(this.destory$)
      )
      .subscribe();

    this.gridService
      .gridChangeObservable()
      .pipe(
        filter(
          (activeGridSize: GridSizes) =>
            activeGridSize === GridSizes.EXTRA_SMALL
        ),
        tap(() => (this.activeView = 'mobile')),
        tap(() => this.changeDetectorRef.detectChanges()),
        filter(
          () =>
            !this.mobileContentContainer ||
            this.mobileContentContainer.length === 0
        ),
        tap(() => this.createMobileConent()),
        takeUntil(this.destory$)
      )
      .subscribe();

    this.gameService.fillGameStoreWithGamesFromApi(this.destory$);

    // TODO: write a test that test the old object ids and the new ids and see if they are retrieved correctly,
    //  Should probably be an e2e test or integration test
    //  Or maybe some test in the backend

    // Running outside of Angular is needed because otherwise the websocket implementation of socket.io hangs on the
    // e2e tests
    this.ngZone.runOutsideAngular(() => {
      combineLatest(
        this.gameService.receiveGamesUpdate(this.websocketService),
        this.gameService.getAll(this.destory$)
      )
        .pipe(
          map(([gameIds, games]: [string[], Game[]]) => [
            this.gameService.filterIdsThatExistInTheGames(gameIds, games),
            games,
          ]),
          filter(([gameIds, games]: [string[], Game[]]) => gameIds.length > 0), // TODO: move logic to a service
          switchMap(([gameIds, games]: [string[], Game[]]) =>
            forkJoin(this.gameService.getGamesByIds(gameIds), of(games))
          ),
          map(([newGames, games]: [Game[], Game[]]) => games.concat(newGames)), // TODO: move this logic to a service
          map((games: Game[]) => this.gameService.sortGames(games))
        )
        .subscribe((games: Game[]) => {
          this.ngZone.run(() => {
            this.gameService.updateAll(games);
            this.changeDetectorRef.detectChanges();
          });
        });
    });
  }

  public async createMobileConent(): Promise<void> {
    const {
      MobileContentComponent,
      InternalMobileContentComponent,
    } = await import('./modules/mobile-content/mobile-content.component');

    const factory = await this.compiler.compileModuleAsync(
      InternalMobileContentComponent
    );
    const ref = factory.create(this.injector);

    const mobileContentFactory = this.componentFactoryResolver.resolveComponentFactory(
      MobileContentComponent
    );
    this.mobileContentContainer.createComponent(
      mobileContentFactory,
      null,
      this.injector,
      [],
      ref
    );
  }

  public async createLargeScreenConent(): Promise<void> {
    const {
      LargeScreenContentComponent,
      InternalLargeScreenContentModule,
    } = await import(
      './modules/larger-screen-content/large-screen-content.component'
    );

    const factory = await this.compiler.compileModuleAsync(
      InternalLargeScreenContentModule
    );
    const ref = factory.create(this.injector);

    const largeScreenContentFactory = this.componentFactoryResolver.resolveComponentFactory(
      LargeScreenContentComponent
    );

    this.largeScreenContentContainer.createComponent(
      largeScreenContentFactory,
      null,
      this.injector,
      [],
      ref
    );
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();

    this.mobileContentContainer?.clear();
    this.largeScreenContentContainer?.clear();
  }
}

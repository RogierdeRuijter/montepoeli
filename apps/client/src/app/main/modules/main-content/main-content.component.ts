import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, OnInit, Compiler, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { tap, filter, takeUntil, map, switchMap } from 'rxjs/operators';
import { GridSizes } from '../../../shared/static-files/enums';
import { GridService } from '../../../shared/services/grid/grid.service';
import { Subject, combineLatest, of, forkJoin } from 'rxjs';
import { GameService } from 'src/app/shared/modules/home/modules/game/services/game.service';
import { Game } from 'src/app/shared/interfaces/game.interface';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
              private injector: Injector,
              private gridService: GridService,
              private compiler: Compiler,
              private changeDetectorRef: ChangeDetectorRef,
              private gameService: GameService) {}

  @ViewChild('mobileContent', { read: ViewContainerRef, static: false}) 
  public mobileContentContainer: ViewContainerRef;

  @ViewChild('largeScreenContent', { read: ViewContainerRef, static: false}) 
  public largeScreenContentContainer: ViewContainerRef;

  public activeView: string;

  private destory$: Subject<void> = new Subject();

  public ngOnInit(): void {
    this.gridService.gridChangeObservable()
      .pipe(
        filter((activeGridSize: GridSizes) => activeGridSize !== GridSizes.EXTRA_SMALL && this.activeView !== 'large-screen'),
        tap(() => this.activeView = 'large-screen'),
        tap(() => this.changeDetectorRef.detectChanges()),
        filter(() => !this.largeScreenContentContainer || this.largeScreenContentContainer.length === 0),
        tap(() => this.createLargeScreenConent()),
        takeUntil(this.destory$)
    ).subscribe();

    this.gridService.gridChangeObservable()
      .pipe(
        filter((activeGridSize: GridSizes) => activeGridSize === GridSizes.EXTRA_SMALL),
        tap(() => this.activeView = 'mobile'),
        tap(() => this.changeDetectorRef.detectChanges()),
        filter(() => !this.mobileContentContainer || this.mobileContentContainer.length === 0),
        tap(() => this.createMobileConent()),
        takeUntil(this.destory$)
      ).subscribe();

      this.gameService.fillGameStoreWithGamesFromApi(this.destory$);
        
      // TODO: write a test that test the old object ids and the new ids and see if they are retrieved correctly,
      //  Should probably be an e2e test or integration test
      //  Or maybe some test in the backend

      combineLatest(
        this.gameService.receiveGamesUpdate(),
        this.gameService.getAll(this.destory$)
      ).pipe(
          // Get all ids not currently in the frontend
          map(([gameIds, games]: [string[], Game[]]) => [this.gameService.filterIdsThatExistInTheGames(gameIds, games), games]),
          filter(([gameIds, games]: [string[], Game[]]) => gameIds.length > 0), // TODO: move logic to a service
          // Go back to the API with these new ids to get the new games
          switchMap(([gameIds, games]: [string[], Game[]]) => forkJoin(this.gameService.getGamesByIds(gameIds), of(games))),
          // Append new game to current games
          map(([newGames, games]: [Game[], Game[]]) => {
            console.log('newGames', newGames);
            console.log('games', games);
            return games.concat(newGames);
          }), // TODO: move this logic to a service
          // Sort these games by date
          map((games: Game[]) => {
            console.log('unsortedGames', games);

            const sortedGames = this.gameService.sortGames(games);
            console.log('sortedGames', sortedGames);
            return sortedGames;
          
          })
          // Put these new games in the store
        ).subscribe((games: Game[]) => {
          console.log('games', games);
          this.gameService.updateAll(games);
          this.changeDetectorRef.detectChanges();
        });
  }

  public async createMobileConent(): Promise<void> {
    const { MobileContentComponent, InternalMobileContentComponent } = await import('./modules/mobile-content/mobile-content.component');
    
    const factory = await this.compiler.compileModuleAsync(InternalMobileContentComponent);
    const ref = factory.create(this.injector);
    
    const mobileContentFactory = this.componentFactoryResolver.resolveComponentFactory(MobileContentComponent);
    this.mobileContentContainer.createComponent(mobileContentFactory, null, this.injector, [], ref);
  }

  public async createLargeScreenConent(): Promise<void> {
    const { LargeScreenContentComponent, InternalLargeScreenContentModule } = await import('./modules/larger-screen-content/large-screen-content.component');

    const factory = await this.compiler.compileModuleAsync(InternalLargeScreenContentModule);
    const ref = factory.create(this.injector);

    const largeScreenContentFactory = this.componentFactoryResolver.resolveComponentFactory(LargeScreenContentComponent);

    this.largeScreenContentContainer.createComponent(largeScreenContentFactory, null, this.injector, [], ref);
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();

    this.mobileContentContainer?.clear();
    this.largeScreenContentContainer?.clear();
  }
}

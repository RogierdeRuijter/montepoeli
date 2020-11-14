import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  Compiler,
  Injector,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Game } from '../../../../../shared/interfaces/game.interface';
import { GameService } from './services/game.service';
import { Actions } from '../../../../../shared/static-files/enums';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../../../../../shared/interfaces/user.interface';
import { NewGameStore } from '../../../../stores/new-game.store';
import { RemoveLastAddedGameStore } from '../../../../../shared/stores/remove-last-added-game.store';
import { AsyncBaseComponent } from '../../../../../shared/modules/async/components/async-base-component/async-base.component';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent extends AsyncBaseComponent implements OnInit, OnDestroy {
  @Input()
  public games$: BehaviorSubject<Game[]>;

  @Input()
  public users: User[];

  @ViewChild('addDialogContainer', { read: ViewContainerRef })
  public addDialogContainer: ViewContainerRef;
  public addDialogContainerRef: any;

  public actions: Actions[] = [Actions.add];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'black', 'winner'];

  constructor(
    private gameService: GameService,
    private newGameStore: NewGameStore,
    private removeLastAddedGameStore: RemoveLastAddedGameStore,
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  public ngOnInit(): void {
    this.newGameStore.get(this.destroy$).subscribe((game: Game) => this.addGameToView(game));

    this.removeLastAddedGameStore.get(this.destroy$).subscribe((game: Game) => {
      if (game) {
        this.removeAddedGame(game);
      }
    });
  }

  public handleActionEvent(): void {
    this.createAddGameComponent();
  }

  public handleAddEvent(game: Game): void {
    this.addGameToView(game);
    // TODO: test this
    this.gameService
      .save(game)
      .pipe(
        catchError((error) => {
          this.removeAddedGame(game);

          return of(error);
        })
      )
      .subscribe();

    this.addDialogContainerRef.instance.addEvent.unsubscribe();
  }

  private async createAddGameComponent(): Promise<void> {
    const { DialogOverviewComponent } = await import(
      '../../../../../shared/modules/add-game/components/dialog-overview/dialog-overview.component'
    );
    const { AddGameModule } = await import('../../../../../shared/modules/add-game/add-game.module');

    const compFactory = this.componentFactoryResolver.resolveComponentFactory(DialogOverviewComponent);

    const factory = await this.compiler.compileModuleAsync(AddGameModule);
    const ref = factory.create(this.injector);

    this.addDialogContainerRef = this.addDialogContainer.createComponent(compFactory, null, this.injector, [], ref);
    this.changeDetectorRef.detectChanges();

    this.addDialogContainerRef.instance.addEvent.subscribe((game: Game) => this.handleAddEvent(game));
  }

  private addGameToView(game: Game): void {
    game = this.gameService.postProcessGame(game);

    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);
  }

  private removeAddedGame(game: Game): void {
    this.games$.next(this.games$.getValue().filter((game1: Game) => game1 !== game));
  }
}

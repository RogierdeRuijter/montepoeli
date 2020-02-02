import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../../../../../shared/interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {Actions, GridSizes} from '../../../../../../shared/static-files/enums';
import {BehaviorSubject} from 'rxjs';
import {DialogOverviewComponent} from '../../../../../../shared/modules/add-game/components/dialog-overview/dialog-overview.component';
import {User} from '../../../../../../shared/interfaces/user.interface';
import {NewGameStore} from 'src/app/shared/stores/new-game.store';
import {RemoveLastAddedGameStore} from '../../../../../../shared/stores/remove-last-added-game.store';
import {AsyncBaseComponent} from '../../../../../../shared/modules/async/components/async-base-component/async-base.component';

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

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'black', 'winner'];

  public standalone = true;

  public GridSizes = GridSizes;

  constructor(private gameService: GameService,
              private newGameStore: NewGameStore,
              private removeLastAddedGameStore: RemoveLastAddedGameStore) {
    super();
  }

  public ngOnInit(): void {
    this.newGameStore
      .get(this.destroy$)
      .subscribe((game: Game) => this.addGameToView(game));

    this.removeLastAddedGameStore
      .get(this.destroy$)
      .subscribe((game: Game) => {
        if (game) {
          this.removeAddedGame(game);
        }
      });

  }

  public handleActionEvent(): void {
    this.addDialog.openDialog();
  }

  public handleAddEvent(game: Game): void {
    this.addGameToView(game);

    this.gameService.save(game)
      .subscribe(
        () => {},
        () => this.removeAddedGame(game),
      );
  }

  private addGameToView(game: Game): void {
    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);
  }

  private removeAddedGame(game: Game): void {
    this.games$.next(
      this.games$.getValue().filter((game1: Game) => game1 !== game),
    );
  }
}

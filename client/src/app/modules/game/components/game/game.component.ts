import {ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {Game} from '../../../shared/interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {Actions, GridSizes} from '../../../shared/static-files/enums';
import {BehaviorSubject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {User} from '../../../shared/interfaces/user.interface';
import {BlurStore} from '../../../shared/stores/blur.store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {

  @Input()
  public games$: BehaviorSubject<Game[]>;

  @Input()
  public users: User[];

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  public GridSizes = GridSizes;

  constructor(private gameService: GameService,
              private blurStore: BlurStore) {
  }

  public handleActionEvent(): void {
    this.blurStore.set(true);

    this.addDialog.openDialog();
  }

  public handleAddEvent(game: Game): void {
    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);

    this.gameService.save(game)
      .subscribe(
        () => {},
        () => this.removeAddedGame(game),
      );
  }

  private removeAddedGame(game: Game): void {
    this.games$.next(
      this.games$.getValue().filter((game1) => game1 !== game),
    );
  }

}

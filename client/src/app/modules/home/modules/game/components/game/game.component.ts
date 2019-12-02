import {ChangeDetectionStrategy, Component, Input, ViewChild, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Game} from '../../../../../shared/interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {Actions, GridSizes} from '../../../../../shared/static-files/enums';
import {BehaviorSubject, Subject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {User} from '../../../../../shared/interfaces/user.interface';
import {BlurStore} from '../../../../../shared/stores/blur.store';
import { AddGameStore } from 'src/app/modules/shared/stores/add-game.store';
import { StandaloneStore } from 'src/app/modules/shared/stores/standalone.store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit, OnDestroy {

  @Input()
  public games$: BehaviorSubject<Game[]>;

  @Input()
  public users: User[];

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  public standalone: boolean;

  public GridSizes = GridSizes;

  private destroy$: Subject<void> = new Subject();

  constructor(private gameService: GameService,
              private blurStore: BlurStore,
              private addGameStore: AddGameStore,
              private standaloneStore: StandaloneStore,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.addGameStore
    .get(this.destroy$)
    .subscribe(() => {
      this.handleActionEvent();
      // TODO: move to method empty store. in the store with
      // a store finalize method where you empty the store
      this.addGameStore.set(null);
    });

    this.standaloneStore
    .get(this.destroy$)
    .subscribe((standalone) => {
      this.standalone = standalone;
      this.changeDetectorRef.detectChanges();
    });

  }

  public handleActionEvent(): void {
    this.blurStore.set(true);

    this.addDialog.openDialog();
  }

  public handleAddEvent(game: Game): void {
    // TODO: move to service
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

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

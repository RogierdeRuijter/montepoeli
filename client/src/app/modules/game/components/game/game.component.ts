import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../../shared/interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {Actions, GridSizes} from '../../../shared/static-files/enums';
import {BehaviorSubject, Subject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {LoadingStore} from '../../../shared/stores/loading.store';
import {takeUntil, tap} from 'rxjs/operators';
import {LoadingGameFactory} from '../../factories/loading-game.factory';
import {HomeService} from '../../services/home.service';
import {UserService} from '../../../../services/users/user.service';
import {User} from '../../../shared/interfaces/user.interface';
import {UserStore} from '../../stores/user.store';
import {LoadingService} from '../../../shared/services/loading/loading.service';

// TODO: refactor to smart component
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public games$: BehaviorSubject<Game[]> = new BehaviorSubject(null);
  public users: User[];
  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  public loading: boolean;
  public loadingGames: any[] = new LoadingGameFactory().createMany(this.homeService.getAmountOfLoadingGames());

  public observerStopper$: Subject<void> = new Subject();
  public stopDelayedLoading$: Subject<void> = new Subject<void>();

  public GridSizes = GridSizes;

  constructor(private gameService: GameService,
              private loadingStore: LoadingStore,
              private homeService: HomeService,
              private userService: UserService,
              private userStore: UserStore,
              private changeDetectorRef: ChangeDetectorRef,
              private loadingService: LoadingService) {
  }

  public ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
      this.users = users;
      this.userStore.set(users);
      this.changeDetectorRef.detectChanges();
    });

    this.getGames();

    this.loadingStore.get()
      .pipe(
        takeUntil(this.observerStopper$),
      ).subscribe((loading: boolean) => {
      if (loading === true || loading === false) {
        this.loading = loading;
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  public getGames(): void {
    this.loadingService.activateDelayedLoading(this.stopDelayedLoading$);

    this.gameService.getGames()
      .pipe(
        tap(() => this.stopDelayedLoading$.next())
      )
      .subscribe((games: Game[]) => {
        this.games$.next(games);
        this.setAmountOfLoadingGamesInCookie(games);
        this.stopLoading();
      });
  }

  public handleActionEvent(): void {
    this.addDialog.openDialog();
  }

  public handleAddEvent(game: Game): void {
    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);

    this.gameService.saveGame(game)
      .subscribe(
        () => {
        },
        () => this.removeAddedGame(game),
      );
  }

  public ngOnDestroy(): void {
    this.games$.complete();
  }

  private removeAddedGame(game: Game): void {
    this.games$.next(
      this.games$.getValue().filter((game1) => game1 !== game),
    );
  }

  private setAmountOfLoadingGamesInCookie(games: Game[]): void {
    this.homeService.setAmountOfLoadingGamesInCookie(games);
  }

  private stopLoading(): void {
    this.loadingStore.set(false);
    this.observerStopper$.next();
    this.loading = false;
  }

}

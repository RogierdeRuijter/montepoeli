import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {Actions, GridSizes} from '../../static-files/enums';
import {BehaviorSubject, Subject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {LoadingStore} from '../../stores/loading.store';
import {takeUntil} from 'rxjs/operators';
import {LoadingGameFactory} from '../../factories/loading-game.factory';
import {HomeService} from '../../services/home.service';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user.interface';
import {UserStore} from '../../stores/user.store';

// TODO: refactor to smart component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public games$: BehaviorSubject<Game[]> = new BehaviorSubject(null);
  public users: User[];
  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  public loading: boolean;
  public loadingGames: any[] = new LoadingGameFactory().createMany(this.homeService.getAmountOfLoadingGames());
  public observerStopper: Subject<void> = new Subject();
  public GridSizes = GridSizes;

  constructor(private gameService: GameService,
              private loadingStore: LoadingStore,
              private homeService: HomeService,
              private userService: UserService,
              private userStore: UserStore) {
  }

  public ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.userStore.set(users);
    });

    this.getGames();

    this.loadingStore.get()
      .pipe(
        takeUntil(this.observerStopper),
      ).subscribe((loading: boolean) => {
      if (loading === true || loading === false) {
        this.loading = loading;
      }
    });
  }

  public getGames(): void {
    this.gameService.getGames()
      .subscribe((games: Game[]) => {
        console.log(games);
        this.games$.next(games);
        this.setAmountOfLoadingGamesInCookie(games);
        this.stopLoading();
      });
  }

  private setAmountOfLoadingGamesInCookie(games: Game[]): void {
    this.homeService.setAmountOfLoadingGamesInCookie(games);
  }

  private stopLoading(): void {
    this.loadingStore.set(false);
    this.observerStopper.next();
    this.loading = false;
  }

  public handleActionEvent(action: Actions): void {
    this.addDialog.openDialog();
  }

  public handleAddEvent(game: Game): void {
    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);

    // TODO: handle error response
    this.gameService.saveGame(game).subscribe((res) => console.log(res));
    // TODO: fix issues with this
  }

  public ngOnDestroy(): void {
    this.games$.complete();
  }

}

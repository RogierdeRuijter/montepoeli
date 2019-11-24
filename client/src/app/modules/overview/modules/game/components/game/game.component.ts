import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Game} from '../../../../../shared/interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {Actions, GridSizes} from '../../../../../shared/static-files/enums';
import {BehaviorSubject, Subject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {User} from '../../../../../shared/interfaces/user.interface';
import {takeUntil, tap} from 'rxjs/operators';
import {UserService} from '../../../../../../services/users/user.service';
import {UserStore} from '../../stores/user.store';
import {LoadingStore} from '../../../../../shared/stores/loading.store';
import {LoadingService} from '../../../../../shared/services/loading/loading.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit, OnDestroy {

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public games$: BehaviorSubject<Game[]> = new BehaviorSubject(null);

  public users: User[];

  public loadingGames: any[];

  public loading: boolean;

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  public GridSizes = GridSizes;

  public observerStopper$: Subject<void> = new Subject();
  public stopDelayedLoading$: Subject<void> = new Subject<void>();

  constructor(private gameService: GameService,
              private userService: UserService,
              private userStore: UserStore,
              private loadingStore: LoadingStore,
              private changeDetectorRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) {
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
        () => {},
        () => this.removeAddedGame(game),
      );
  }

  private removeAddedGame(game: Game): void {
    this.games$.next(
      this.games$.getValue().filter((game1) => game1 !== game),
    );
  }

  public ngOnInit(): void {
    this.activatedRoute.parent.data.subscribe(data => this.setGamesInComponent(data.games));
    // this.loadingGames = new LoadingGameFactory().createMany(this.gameService.getAmountOfLoadingGames());

    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.userStore.set(users);
      });

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

  // TODO: the placeholder loading does not work with the resolver approach
  // Ill disable it for now
  // Find a way to do placeholder loading with the resolver
  private setGamesInComponent(games: Game[]): void {
    // this.loadingService.activateDelayedLoading(this.stopDelayedLoading$);

    this.games$.next(games);
    // this.setAmountOfLoadingGamesInCookie(games);
    // this.stopLoading();
  }

  // private setAmountOfLoadingGamesInCookie(games: Game[]): void {
  //   this.gameService.setAmountOfLoadingGamesInCookie(games);
  // }

  // private stopLoading(): void {
  //   this.loadingStore.set(false);
  //   this.observerStopper$.next();
  //   this.loading = false;
  // }

  public ngOnDestroy(): void {
    this.games$.complete();
  }
}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {HttpResponse} from '@angular/common/http';
import {Actions} from '../../static-files/enums';
import {BehaviorSubject, Subject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {LoadingStore} from '../../stores/loading.store';
import {takeUntil} from 'rxjs/operators';
import {LoadingGamesFactory} from '../../factories/loading-games.factory';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public games$: BehaviorSubject<Game[]> = new BehaviorSubject(null);

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  public loading: boolean;
  public loadingGames: any[] = new LoadingGamesFactory().create(this.homeService.getAmountOfLoadingGames());
  public observerStopper: Subject<void> = new Subject();

  constructor(private gameService: GameService,
              private loadingStore: LoadingStore,
              private homeService: HomeService) {
  }

  public ngOnInit(): void {
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
      .subscribe((gamesResponse: HttpResponse<Game[]>) => { // TODO: create interceptor to strip body
        const games: Game[] = gamesResponse.body;
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
    console.log(game);
    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);
    // TODO: Save in the backend
  }

  public ngOnDestroy(): void {
    this.games$.complete();
  }

}

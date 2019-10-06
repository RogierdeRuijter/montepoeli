import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {Alignments, GridSizes, Icons, IconSize, Tabs} from '../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../services/tab-change.global-event-emitter';
import {User} from '../../shared/interfaces/user.interface';
import {takeUntil, tap} from 'rxjs/operators';
import {UserService} from '../../../services/users/user.service';
import {UserStore} from '../../game/stores/user.store';
import {Game} from '../../shared/interfaces/game.interface';
import {LoadingService} from '../../shared/services/loading/loading.service';
import {LoadingStore} from '../../shared/stores/loading.store';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {GameService} from '../../game/services/game.service';
import {LoadingGameFactory} from '../../game/factories/loading-game.factory';
import {HomeService} from '../../game/services/home.service';
import {Rule} from '../../shared/interfaces/rule.interface';
import {RuleService} from '../../rule/services/rule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterContentInit, OnDestroy {

  public showGames = true;
  public showRules = false;

  public users: User[];
  public games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>(null);
  public loadingGames: any[] = new LoadingGameFactory().createMany(this.homeService.getAmountOfLoadingGames());

  public rules$: Observable<Rule[]>;

  public observerStopper$: Subject<void> = new Subject();
  public stopDelayedLoading$: Subject<void> = new Subject<void>();
  public loading: boolean;

  public Icons = Icons;
  public IconSize = IconSize;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private userService: UserService,
              private userStore: UserStore,
              private loadingService: LoadingService,
              private loadingStore: LoadingStore,
              private gameService: GameService,
              private homeService: HomeService,
              private ruleService: RuleService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  public ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.userStore.set(users);
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

    this.rules$ = this.ruleService.getAll();
  }

  public ngAfterContentInit(): void {
    this.tabChangeGlobalEventEmitter
      .get()
      .subscribe((tab: Tabs) => {
        if (tab === Tabs.GAMES) {
          this.showRules = false;
          this.showGames = true;
          this.changeDetectorRef.detectChanges();
        }

        if (tab === Tabs.RULES) {
          this.showGames = false;
          this.showRules = true;
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

  private setAmountOfLoadingGamesInCookie(games: Game[]): void {
    this.homeService.setAmountOfLoadingGamesInCookie(games);
  }

  private stopLoading(): void {
    this.loadingStore.set(false);
    this.observerStopper$.next();
    this.loading = false;
  }

  public ngOnDestroy(): void {
    this.games$.complete();
  }

}

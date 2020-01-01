import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {Alignments, GridSizes, Icons, IconSize, Tabs} from '../../../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../../services/tab-change.global-event-emitter';
import {User} from '../../../../shared/interfaces/user.interface';
import {UserService} from '../../../../services/users/user.service';
import {UserStore} from '../../modules/game/stores/user.store';
import {Game} from '../../../../shared/interfaces/game.interface';
import {BehaviorSubject, Subject} from 'rxjs';
import {Rule} from '../../../../shared/interfaces/rule.interface';
import {ActivatedRoute} from '@angular/router';

// TODO: add hammerjs for swiping left and right between games and rules
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
  public rules: Rule[];

  public Icons = Icons;
  public IconSize = IconSize;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  public views = ['games', 'rules'];

  private SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  private destroy$: Subject<void> = new Subject();

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private userService: UserService,
              private userStore: UserStore,
              private changeDetectorRef: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) {

  }

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.rules = data.rules;
      this.games$.next(data.games);
    });

    this.userService.getAll()
      .subscribe((users: User[]) => {
        this.users = users;
        this.userStore.set(users);
      });
  }

  public ngAfterContentInit(): void {
    this.tabChangeGlobalEventEmitter
      .get(this.destroy$)
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

  public swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT): void {
    // out of range
    if (currentIndex > this.views.length || currentIndex < 0) return;

    let nextIndex = 0;

    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isLast = currentIndex === this.views.length - 1;
        nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
        const isFirst = currentIndex === 0;
        nextIndex = isFirst ? this.views.length - 1 : currentIndex - 1;
    }

    console.info('in swipe action');
    console.log(nextIndex);

    if (nextIndex === 0) {
      this.showGames = true;
      this.showRules = false;
    }

    if (nextIndex === 1) {
      this.showGames = false;
      this.showRules = true;
    }
}

  public ngOnDestroy(): void {
    this.games$.complete();

    this.destroy$.next();
    this.destroy$.complete();
  }
}

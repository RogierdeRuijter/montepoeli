import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import {Alignments, GridSizes, Icons, IconSize, Tabs} from '../../../../../shared/static-files/enums';
import {User} from '../../../../../shared/interfaces/user.interface';
import {UserStore} from '../../modules/game/stores/user.store';
import {Game} from '../../../../../shared/interfaces/game.interface';
import {BehaviorSubject, Subject} from 'rxjs';
import { GameComponent } from '../../modules/game/components/game/game.component';
import { RuleComponent } from '../../modules/rule/components/rule/rule.component';
import { ComponentCreationService } from 'src/app/shared/services/component-creation/component-creation.service';
import { Rule } from '../../../../../shared/interfaces/rule.interface';
import { GameService } from '../../modules/game/services/game.service';
import { RuleService } from '../../modules/rule/services/rule.service';
import { TabChangeGlobalEventEmitter } from 'src/app/shared/services/tab-change.global-event-emitter';
import { UserService } from 'src/app/shared/services/users/user.service';

// TODO: add hammerjs for swiping left and right between games and rules
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild('games', { read: ViewContainerRef, static: false}) 
  public gamesContainer: ViewContainerRef;
  public gamesComponentRef: ComponentRef<GameComponent>;

  @ViewChild('rules', { read: ViewContainerRef, static: false }) 
  public rulesContainer: ViewContainerRef;
  public rulesComponentRef: ComponentRef<RuleComponent>;

  public showGames = true;
  public showRules = false;

  public users: User[];
  public games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>(null);
  public rules: Rule[];

  public Icons = Icons;
  public IconSize = IconSize;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  private destroy$: Subject<void> = new Subject();

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private userService: UserService,
              private userStore: UserStore,
              private changeDetectorRef: ChangeDetectorRef,
              private componentCreationService: ComponentCreationService,
              private gameService: GameService,
              private ruleService: RuleService) {

  }

  public ngOnInit(): void {
    this.gameService.getAll()
      .subscribe((games: Game[]) => this.games$.next(games));
    
    this.ruleService.getAll()
      .subscribe((rules: Rule[]) => this.rules = rules);

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

          if (this.gamesContainer.length === 0) {
            this.createGamesComponent().then(() => {
              this.gamesComponentRef.instance.games$ = this.games$;
              this.gamesComponentRef.instance.users = this.users;
            });
          }

          this.changeDetectorRef.detectChanges();
        }

        if (tab === Tabs.RULES) {
          this.showGames = false;
          this.showRules = true;
          
          if (this.rulesContainer?.length === 0) {
            this.createRulesComponent();
          }

          this.changeDetectorRef.detectChanges();
        }
      });
  }

  public async createGamesComponent(): Promise<void> {
    this.gamesComponentRef = await this.componentCreationService.create<GameComponent>(GameComponent, this.gamesContainer);
  }

  public async createRulesComponent(): Promise<void> {
    this.rulesComponentRef = await this.componentCreationService.create<RuleComponent>(RuleComponent, this.rulesContainer);
  }

  public ngOnDestroy(): void {
    this.games$.complete();

    this.destroy$.next();
    this.destroy$.complete();
  }
}

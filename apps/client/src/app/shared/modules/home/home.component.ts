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
  ComponentFactoryResolver,
  Injector,
  Compiler,
} from '@angular/core';
import {BehaviorSubject, Subject, combineLatest, of} from 'rxjs';
import {Alignments, GridSizes, Icons, IconSize, Tabs} from '../../../shared/static-files/enums';
import {User} from '../../../shared/interfaces/user.interface';
import {UsersStore} from './modules/game/stores/user.store';
import {Game} from '../../../shared/interfaces/game.interface';
import {Rule} from '../../../shared/interfaces/rule.interface';
import { GameService } from './modules/game/services/game.service';
import { RuleService } from './modules/rule/services/rule.service';
import { TabChangeGlobalEventEmitter } from '../../services/tab-change.global-event-emitter';
import { UserService } from '../../services/users/user.service';

// TODO: add hammerjs for swiping left and right between games and rules
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterContentInit, OnDestroy {

  @ViewChild('rules', { read: ViewContainerRef, static: false })
  public rulesContainer: ViewContainerRef;
  public rulesComponentRef$: Subject<ComponentRef<any>> = new Subject();

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
              private userStore: UsersStore,
              private changeDetectorRef: ChangeDetectorRef,
              private gameService: GameService,
              private ruleService: RuleService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private compiler: Compiler) {

  }

  public ngOnInit(): void {    
    this.gameService.getAll()
      .subscribe((games: Game[]) => this.games$.next(games));

    this.userService.getAll()
      .subscribe((users: User[]) => {
        this.users = users;
        this.userStore.set(users);
      });

      this.userStore.get(this.destroy$)
        .subscribe((users: User[]) => this.users = users);

      combineLatest([this.ruleService.getAll(), this.rulesComponentRef$])
        .subscribe(([rules, rulesComponentRef]: [Rule[], ComponentRef<any>]) => {
          rulesComponentRef.instance.rules = rules;
          this.changeDetectorRef.detectChanges();
        });
  }

  public ngAfterContentInit(): void {
    this.tabChangeGlobalEventEmitter
      .get(this.destroy$)
      .subscribe((tab: Tabs) => {
        if (tab === Tabs.GAMES) {
          this.showRules = false;
          this.showGames = true;
        }

        if (tab === Tabs.RULES) {
          this.showGames = false;
          this.showRules = true;

          if (this.rulesContainer.length === 0) {
            this.createRulesComponent()
              .then((ruleComponentRef: ComponentRef<any>) => this.rulesComponentRef$.next(ruleComponentRef));
            return;
          }
        }

        this.changeDetectorRef.detectChanges();
      });
  }

  public async createRulesComponent(): Promise<ComponentRef<any>> {
    const { RuleComponent, InternalRuleComponentModule } = await import('./modules/rule/rule.component');
    
    const compFactory = this.componentFactoryResolver.resolveComponentFactory(RuleComponent);
    
    const factory = await this.compiler.compileModuleAsync(InternalRuleComponentModule);
    const ref = factory.create(this.injector);

    return of(this.rulesContainer.createComponent(compFactory, null, this.injector, [], ref)).toPromise();
  }

  public ngOnDestroy(): void {
    this.games$.complete();

    this.destroy$.next();
    this.destroy$.complete();
  }
}

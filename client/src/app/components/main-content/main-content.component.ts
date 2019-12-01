import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import {BlurStore} from '../../modules/shared/stores/blur.store';
import {UtilService} from '../../modules/shared/services/util/util.service';
import { Tabs } from 'src/app/modules/shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from 'src/app/services/tab-change.global-event-emitter';
import { AddGameStore } from 'src/app/modules/shared/stores/add-game.store';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StandaloneStore } from 'src/app/modules/shared/stores/standalone.store';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
  public blur = false;
  public showBottomActionMenu = true;

  public gameView = true;

  public standalone: boolean;

  private destory$: Subject<void> = new Subject();

  constructor(private blurStore: BlurStore,
              private addGameStore: AddGameStore,
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private changeDetectorRef: ChangeDetectorRef,
              private authService: AuthService,
              private standaloneStore: StandaloneStore) {}

  public ngOnInit(): void {
    this.blurStore
      .get(this.destory$)
      .subscribe((value: boolean) => {
        this.blur = value;
        this.changeDetectorRef.detectChanges();
      });

    // TODO: pass this with a resolver
    this.standaloneStore
    .get(this.destory$)
    .subscribe((standalone: boolean) => {
      this.standalone = standalone;
      this.changeDetectorRef.detectChanges();
    });
  }

  public gamesHandler(): void {
    this.gameView = true;

    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    this.gameView = false;

    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }

  public addGameHandler(): void {
    // TODO: figure out how to set this properly
    // Move the component here or use the store
    // Store seems to be easier but it seems to be more logical if the popup lives here
    this.addGameStore.set(true);
  }

  public logoutHandler(): void {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import {BlurStore} from '../../modules/shared/stores/blur.store';
import { Tabs } from 'src/app/modules/shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from 'src/app/services/tab-change.global-event-emitter';
import { Subject } from 'rxjs';
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
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private changeDetectorRef: ChangeDetectorRef,
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

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

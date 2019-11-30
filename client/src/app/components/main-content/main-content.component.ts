import {ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import {BlurStore} from '../../modules/shared/stores/blur.store';
import {UtilService} from '../../modules/shared/services/util/util.service';
import { Tabs } from 'src/app/modules/shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from 'src/app/services/tab-change.global-event-emitter';
import { AddGameStore } from 'src/app/modules/shared/stores/add-game.store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
  public blur = false;
  public showBottomActionMenu = true;

  public gameView = true;

  private destory$: Subject<void> = new Subject();

  constructor(private blurStore: BlurStore,
              private addGameStore: AddGameStore,
              private utilService: UtilService,
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.blurStore
      .get(this.destory$)
      .pipe(
        takeUntil(this.destory$)
      ).subscribe((value: boolean) => {
        if (!this.utilService.isNullOrUndefined(value)) {
          console.log(value);
          this.blur = value;
          this.changeDetectorRef.detectChanges();
        }
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

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BlurStore} from '../../modules/shared/stores/blur.store';
import {UtilService} from '../../modules/shared/services/util/util.service';
import { Tabs } from 'src/app/modules/shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from 'src/app/services/tab-change.global-event-emitter';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public blur = false;

  constructor(private blurStore: BlurStore,
              private utilService: UtilService,
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.blurStore.get()
      .subscribe((value: boolean) => {
        if (!this.utilService.isNullOrUndefined(value)) {
          this.blur = value;
          this.changeDetectorRef.detectChanges();
        }
      });
  }


  public gamesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }

  public addGameHandler(): void {

  }
}

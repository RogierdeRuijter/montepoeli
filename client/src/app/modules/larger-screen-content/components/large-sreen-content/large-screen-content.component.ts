import {Component} from '@angular/core';
import {Tabs} from '../../../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../../services/tab-change.global-event-emitter';

@Component({
  selector: 'app-large-screen-content',
  templateUrl: './large-screen-content.component.html',
  styleUrls: ['./large-screen-content.component.scss']
})
export class LargeScreenContentComponent {
  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) {
  }

  public gamesHandler(): void {
    // this.gameView = true;

    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    // this.gameView = false;

    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }
}

import {Component} from '@angular/core';
import {AddGameStore} from 'src/app/shared/stores/add-game.store';
import {Tabs} from '../../../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../../services/tab-change.global-event-emitter';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss']
})
export class MobileContentComponent {
  public gameView: boolean;

  constructor(private addGameStore: AddGameStore,
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) { }

  public addGameHandler(): void {
    // TODO: figure out how to set this properly
    // Move the component here or use the store
    // Store seems to be easier but it seems to be more logical if the popup lives here
    this.addGameStore.set(true);
  }

  public gamesHandler(): void {
    this.gameView = true;

    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    this.gameView = false;

    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }

}

import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import {AddGameStore} from 'src/app/shared/stores/add-game.store';
import {Tabs, Icons} from '../../../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../../services/tab-change.global-event-emitter';
import { AsyncBaseComponent } from 'src/app/shared/modules/async/components/async-base-component/async-base.component';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileContentComponent extends AsyncBaseComponent implements OnInit, OnDestroy {
  public gameView: boolean;
  public selected = Icons.CHESS_PIECES;

  constructor(private addGameStore: AddGameStore,
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) { 
                super();
  }
  
  public ngOnInit(): void {
    this.tabChangeGlobalEventEmitter
      .get(this.destroy$)
      .subscribe((tab: Tabs) => {
        if (tab === Tabs.GAMES) {
          this.gameView = true;
          this.selected = Icons.CHESS_PIECES;
        }

        if (tab === Tabs.RULES) {
          this.gameView = false;
          this.selected = Icons.SCROLL;
        }
      });
  }

  // TODO: when the game game add popup gets submitted reset selected to Icon.CHESS_PIECES
  // See if you wanna do it at all maybe it is a bit to transitiony with the plus icon transition
  // Or add the same transition to the color movement
  public addGameHandler(): void {
    // TODO: figure out how to set this properly
    // Move the component here or use the store
    // Store seems to be easier but it seems to be more logical if the popup lives here
    this.selected = Icons.PLUS;
    this.addGameStore.set(true);
  }

  public gamesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }
}

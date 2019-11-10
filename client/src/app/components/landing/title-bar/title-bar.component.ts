import {Component} from '@angular/core';
import {Alignments, GridSizes, Icons, IconSize, Tabs} from '../../../modules/shared/static-files/enums';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {UnknownCaseException} from '../../../modules/shared/exceptions/UnknownCaseException';
import {TabChangeGlobalEventEmitter} from '../../../services/tab-change.global-event-emitter';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent {
  public color: ThemePalette = 'primary';

  public Icons = Icons;
  public IconSize = IconSize;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) {
  }


  public handleChangeEvent(matTabChangeEvent: MatTabChangeEvent): void {
    switch (matTabChangeEvent.index) {
      case 0:
        this.emitGamesSelected();
        break;
      case 1:
        this.emitRulesSelected();
        break;
      default:
        throw new UnknownCaseException(matTabChangeEvent.index.toString());
    }
  }

  public emitGamesSelected(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public emitRulesSelected(): void {
    console.log(this.tabChangeGlobalEventEmitter);
    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }
}

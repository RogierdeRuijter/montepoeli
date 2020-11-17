import { Component, EventEmitter, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Alignments, GridSizes, IconColor, Icons, IconSize } from '../../../../../../../shared/static-files/enums';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { UnknownCaseException } from '../../../../../../../shared/exceptions/UnknownCaseException';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent {
  @Output()
  public gamesSelected: EventEmitter<void> = new EventEmitter();

  @Output()
  public rulesSelected: EventEmitter<void> = new EventEmitter();

  @Output()
  public iconClicked: EventEmitter<void> = new EventEmitter();

  public color: ThemePalette = 'primary';

  public icons = Icons;
  public iconSize = IconSize;
  public iconColor = IconColor;
  public gridSizes = GridSizes;
  public alignments = Alignments;

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
    this.gamesSelected.emit();
  }

  public emitRulesSelected(): void {
    this.rulesSelected.emit();
  }

  public handleButtonClicked(): void {
    this.iconClicked.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alignments, GridSizes, IconColor, Icons, IconSize } from '../../../../../../../shared/static-files/enums';

@Component({
  selector: 'app-action-bar-footer',
  templateUrl: './action-bar-footer.component.html',
  styleUrls: ['./action-bar-footer.component.scss'],
})
export class ActionBarFooterComponent {
  @Input()
  public showPlusIcon: boolean;

  @Input()
  public selected: Icons;

  @Input()
  public raised: boolean;

  @Output()
  public chessSetSelected: EventEmitter<void> = new EventEmitter();

  @Output()
  public plusSelected: EventEmitter<void> = new EventEmitter();

  @Output()
  public scrollSelected: EventEmitter<void> = new EventEmitter();

  public icons = Icons;
  public iconSize = IconSize;
  public iconColor = IconColor;
  public gridSizes = GridSizes;
  public alignments = Alignments;

  public chessSetClicked(): void {
    this.chessSetSelected.emit();
  }

  public plusClicked(): void {
    this.plusSelected.emit();
  }

  public scrollClicked(): void {
    this.scrollSelected.emit();
  }
}

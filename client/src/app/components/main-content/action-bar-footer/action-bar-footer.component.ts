import { Component, Output, EventEmitter } from '@angular/core';
import { Icons, IconSize, GridSizes, Alignments } from '../../../modules/shared/static-files/enums';

@Component({
  selector: 'app-action-bar-footer',
  templateUrl: './action-bar-footer.component.html',
  styleUrls: ['./action-bar-footer.component.scss']
})
export class ActionBarFooterComponent {

  @Output()
  public chessSetSelected: EventEmitter<void> = new EventEmitter();

  @Output()
  public plusSelected: EventEmitter<void> = new EventEmitter();

  @Output()
  public scrollSelected: EventEmitter<void> = new EventEmitter();

  public Icons = Icons;
  public IconSize = IconSize;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

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

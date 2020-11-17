import { Component, Input } from '@angular/core';
import { ButtonFunction, ButtonRowType, ButtonType, GridSizes } from '../../../../static-files/enums';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.scss'],
})
export class ButtonRowComponent {
  @Input()
  public buttonRowType: ButtonRowType;

  @Input()
  public buttonFunctions: ButtonFunction[];

  @Input()
  public buttonTypes: ButtonType[];

  @Input()
  public disabled = false;

  public buttonRowTypes = ButtonRowType;
  public gridSizes = GridSizes;
}

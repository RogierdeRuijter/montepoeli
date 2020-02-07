import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actions, IconColor, Icons, IconSize} from '../../../../../../../../shared/static-files/enums';
import {IllegalInputException} from '../../../../../../../../shared/exceptions/IllegalInputException';
import {UnknownCaseException} from '../../../../../../../../shared/exceptions/UnknownCaseException';

@Component({
  selector: 'ui-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.scss'],
})
export class TableActionComponent implements OnInit {

  @Input()
  public ids: string[];

  @Input()
  public actions: Actions[];

  @Input()
  public disabled: boolean[];

  @Output()
  public actionClickEvent: EventEmitter<Actions> = new EventEmitter();

  public iconsMap: any = {};

  public IconColor = IconColor;
  public IconSize = IconSize;

  public ngOnInit(): void {
    if (this.disabled && this.disabled.length !== this.actions.length) {
      throw new IllegalInputException('disabled and actions should be the same length');
    }

    this.actions.forEach((action: Actions, index) => this.iconsMap[action] = {
      icon: this.fetchIconForAction(action),
      disabled: this.disabled ? this.disabled[index] : false,
    });
  }

  public actionClick(action: Actions): void {
    this.actionClickEvent.emit(action);
  }

  private fetchIconForAction(action: Actions): Icons {
    switch (action) {
      case Actions.ADD:
        return Icons.PLUS;
      case Actions.ACCEPT:
        return Icons.CHECK;
      default:
        throw new UnknownCaseException(action);
    }
  }

}

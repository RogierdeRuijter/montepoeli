import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actions, Icons} from '../../../static-files/enums';

@Component({
  selector: 'ui-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.scss'],
})
export class TableActionComponent implements OnInit {

  @Input()
  public actions: Actions[];

  @Input()
  public disabled: boolean[];

  @Output()
  public actionClickEvent: EventEmitter<Actions> = new EventEmitter();

  public iconsMap: any = {};

  public ngOnInit(): void {
    if (this.disabled && this.disabled.length !== this.actions.length) {
      throw new Error('should be the same length'); // TODO: make specific error
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
      // default: throw new UnknownCaseException();
    }
  }

}

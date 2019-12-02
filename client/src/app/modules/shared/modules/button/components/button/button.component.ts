import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonFunction, ButtonType} from '../../static-files/enums';
import {UnknownCaseException} from '../../exceptions/UnknownCaseException';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input()
  public id: string;

  @Input()
  public disabled: boolean;

  @Input()
  public buttonType: ButtonType;

  @Input()
  public buttonFunction: ButtonFunction;

  @Input()
  public dialogDataToSubmit: any = false;

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  public buttonColor: any;
  public translationKey: string;

  public ngOnInit(): void {
    switch (this.buttonType) {
      case ButtonType.PRIMARY:
        this.buttonColor = 'primary';
        break;
      case ButtonType.SECONDARY:
        this.buttonColor = 'accent';
        break;
      default: 
        throw new UnknownCaseException('unkown');
    }

    switch (this.buttonFunction) {
      case ButtonFunction.LOGIN:
        this.translationKey = 'pages.login.do_login';
        break;
      case ButtonFunction.CANCEL:
        this.translationKey = 'buttons.cancel';
        break;
      case ButtonFunction.SAVE:
        this.translationKey = 'buttons.save';
        break;
      default:
        throw new UnknownCaseException(this.buttonFunction);
    }
  }

  public click(): void {
    this.clickEvent.emit();
  }
}

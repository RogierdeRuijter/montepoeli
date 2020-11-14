import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonFunction, ButtonType } from '../../../../static-files/enums';
import { UnknownCaseException } from '../../../../exceptions/UnknownCaseException';

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
      case ButtonType.primary:
        this.buttonColor = 'primary';
        break;
      case ButtonType.secondary:
        this.buttonColor = 'accent';
        break;
      case ButtonType.normal:
        this.buttonColor = '';
        break;
      default:
        throw new UnknownCaseException('unkown');
    }

    switch (this.buttonFunction) {
      case ButtonFunction.login:
        this.translationKey = 'pages.login.do_login';
        break;
      case ButtonFunction.cancel:
        this.translationKey = 'buttons.cancel';
        break;
      case ButtonFunction.save:
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

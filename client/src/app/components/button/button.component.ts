import {Component, Input, OnInit} from '@angular/core';
import {ButtonFunction, ButtonStyle, ButtonType} from '../../static-files/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input()
  public disabled: boolean;

  @Input()
  public buttonType: ButtonType;

  @Input()
  public buttonFunction: ButtonFunction;

  @Input()
  public buttonStyle: ButtonStyle;

  public buttonColor: any;
  public translationKey: string;

  public ngOnInit(): void {
    switch (this.buttonType) {
      case ButtonType.PRIMARY:
        this.buttonColor = 'primary';
        break;
      case ButtonType.SECONDARY:
        this.buttonColor = 'accent';
    }

    if (this.buttonFunction === ButtonFunction.LOGIN) {
      this.translationKey = 'pages.login.do_login';
    }
  }
}

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Alignments,
  ButtonFunction,
  ButtonType,
  GridSizes,
} from '../../../../../shared/static-files/enums';
import { NgForm } from '@angular/forms';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'ui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', animate('2000ms', style({ opacity: 1 })), {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class LoginFormComponent {
  @ViewChild('loginForm', { static: true })
  public currentForm: NgForm;

  @ViewChild('username', { static: true })
  public usernameField: ElementRef;

  public ButtonFunction = ButtonFunction;
  public ButtonTypes = ButtonType;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  @Output()
  public loginEvent: EventEmitter<any> = new EventEmitter();

  @Input()
  public disabled: boolean;

  public loginEmitter(): void {
    this.loginEvent.emit({
      username: this.currentForm.value.username,
      password: this.currentForm.value.password,
    });
  }
}

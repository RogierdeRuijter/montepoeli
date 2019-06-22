import {Component, ViewChild} from '@angular/core';


import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {ButtonFunction, ButtonType} from '../../modules/shared/static-files/enums';
import {AuthService} from '../../services/auth/auth.service';
import {NotificationService} from '../../modules/shared/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  @ViewChild('loginForm', {static: true})
  public currentForm: NgForm;

  public isSubmitting = false;

  public ButtonFunction = ButtonFunction;
  public ButtonTypes = ButtonType;

  constructor(private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService,
              private translationService: TranslateService) {
  }

  public onLogin(): void {
    this.isSubmitting = true;
    const user = {};
    user['username'] = this.currentForm.value.username;
    user['pwd'] = this.currentForm.value.password;
    this.authService.login(user).subscribe(
      () => {
      }, (error) => {

      this.isSubmitting = false;
      let errMsg = 'login_error';
        const title = this.translationService.instant('warnings.incorrect_credentials.title');
      if (error && error['error']) {
        if (error.status === 401) {
          errMsg = this.translationService.instant('warnings.incorrect_credentials.body');
        }
      }
        this.notificationService.longWarning(errMsg, title + ':');
    });
  }

}

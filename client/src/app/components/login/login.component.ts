import {ChangeDetectionStrategy, Component} from '@angular/core';


import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../services/auth/auth.service';
import {NotificationService} from '../../modules/shared/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public isSubmitting = false;

  constructor(private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService,
              private translationService: TranslateService) {
  }

  public onLogin(userInfo: any): void {
    this.isSubmitting = true;
    const user = {};
    user['username'] = userInfo.username;
    user['pwd'] = userInfo.password;
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

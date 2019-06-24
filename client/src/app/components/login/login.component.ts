import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Alignments, ButtonFunction, ButtonType, GridSizes} from '../../modules/shared/static-files/enums';
import {AuthService} from '../../services/auth/auth.service';
import {NotificationService} from '../../modules/shared/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('loginForm', {static: true})
  public currentForm: NgForm;

  @ViewChild('username', {static: true})
  public usernameField: ElementRef;

  public isSubmitting = false;

  public ButtonFunction = ButtonFunction;
  public ButtonTypes = ButtonType;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  constructor(private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService,
              private translationService: TranslateService) {
  }

  public ngAfterViewInit(): void {
    console.log(this.usernameField);
    this.usernameField.nativeElement.focus();
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

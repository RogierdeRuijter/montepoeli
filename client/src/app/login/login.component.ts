import {Component, ViewChild} from '@angular/core';

import {AuthService} from '../auth/auth.service';

import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  @ViewChild('loginForm')
  public currentForm: NgForm;

  public isSubmitting = false;

  constructor(private router: Router, private authService: AuthService,
              private toastrService: ToastrService,
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
        this.toastrService.warning(errMsg, title + ':', {
        timeOut: 3000,
      });
    });
  }

}

import {Component, ViewChild} from '@angular/core';

import {AuthService} from '../auth/auth.service';

import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

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
              private toastrService: ToastrService) {
  }

  public onLogin(): void {
    this.isSubmitting = true;
    const user = {};
    user['username'] = this.currentForm.value.username;
    user['pwd'] = this.currentForm.value.password;
    this.authService.login(user).subscribe(() => {
    }, (error) => {
      this.isSubmitting = false;
      let errMsg = 'login_error';
      if (error && error['error']) {
        errMsg = error.error.error_code;
      }
      this.toastrService.error(JSON.stringify(errMsg), 'Login  Error:', {
        timeOut: 3000,
      });
    });
  }

}

import {Component} from '@angular/core';


import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public isSubmitting = false;

  constructor(private router: Router,
              private authService: AuthService) {
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
      });
  }

}

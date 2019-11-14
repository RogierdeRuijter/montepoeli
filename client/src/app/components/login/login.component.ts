import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {Environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public isSubmitting = false;
  private environment = new Environment();

  constructor(private router: Router,
              private authService: AuthService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME]);
    }
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

 public doExplicitChangeDetectionForAutofill(): void {
   this.changeDetectorRef.detectChanges();
 }

}

import {ChangeDetectorRef, Component} from '@angular/core';
import { AuthService } from 'src/app/shared/modules/auth/services/auth/auth.service';

// TODO: move to own module
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public isSubmitting = false;

  constructor(private authService: AuthService,
              private changeDetectorRef: ChangeDetectorRef) {
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

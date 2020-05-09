import {ChangeDetectorRef, Component} from '@angular/core';
import { AuthService } from '../../../shared/modules/auth/services/auth/auth.service';

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
    const potentialUser = {};

    potentialUser['username'] = userInfo.username;
    potentialUser['pwd'] = userInfo.password;

    this.authService.login(potentialUser)
      .subscribe(() => {},
        (error) => this.isSubmitting = false);
  }

  public doExplicitChangeDetectionForAutofill(): void {
    this.changeDetectorRef.detectChanges();
  }

}

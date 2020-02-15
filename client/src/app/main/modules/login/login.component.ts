import {ChangeDetectorRef, Component} from '@angular/core';
import { AuthService } from 'src/app/shared/modules/auth/services/auth/auth.service';
import { tap } from 'rxjs/operators';
import { UserStoreService } from 'src/app/shared/modules/user/store/user-store.service';
import { LanguagePreferenceService } from 'src/app/shared/modules/translate/services/language-preference.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public isSubmitting = false;

  constructor(private authService: AuthService,
              private changeDetectorRef: ChangeDetectorRef,
              private languagePreferenceService: LanguagePreferenceService) {
  }

  public onLogin(userInfo: any): void {
    this.isSubmitting = true;
    const potentialUser = {};

    potentialUser['username'] = userInfo.username;
    potentialUser['pwd'] = userInfo.password;

    this.authService.login(potentialUser)
      .pipe(
        tap((user: User) => {
          console.log(user);
          this.languagePreferenceService.setWithUser(user);

        })
      ).subscribe(() => {},
        (error) => this.isSubmitting = false);
  }

  public doExplicitChangeDetectionForAutofill(): void {
    this.changeDetectorRef.detectChanges();
  }

}

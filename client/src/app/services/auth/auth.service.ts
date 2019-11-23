import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CustomHttpService} from '../../modules/shared/services/custom-http/custom-http.service';
import {Environment} from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from 'src/app/modules/shared/services/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private environment = new Environment();
  constructor(private router: Router,
              private httpService: CustomHttpService,
              private cookieService: CookieService,
              private notificationService: NotificationService) {
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public login(user: any): Observable<any> {
    return this.httpService.post(
      this.environment.backend.ENTRY_POINTS.SIGNIN, {
        username: user.username,
        password: user.pwd,
      }).pipe(
        tap(jwt => {
          // TODO: work around for automation tests
          if (!this.cookieService.check(this.environment.authentication.TOKENNAME)) {
            this.cookieService.set(this.environment.authentication.TOKENNAME, jwt[this.environment.authentication.TOKENNAME]);
          }
        }),
      tap((data: any) => {
        if (data) {
          this.loggedIn = true;
        }
      }),
      tap(() => this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME])));
  }

  public logout(): void {
    this.clearSession();
    this.loggedIn = false;
    this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
  }

  public getToken(): string {
    const temp = this.cookieService.get(this.environment.authentication.TOKENNAME);
    return temp ? temp : '';
  }

  public clearSession(): void {
    this.cookieService.delete(this.environment.authentication.TOKENNAME);
  }
}

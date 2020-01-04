import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CustomHttpService} from '../../../http/services/custom-http/custom-http.service';
import {Environment} from '../../../../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private environment = new Environment();

  constructor(private router: Router,
              private httpService: CustomHttpService,
              private cookieService: CookieService) {
  }

  public isAuthenticated(): boolean {
    return this.doesTheUserHaveAValidToken();
  }

  private doesTheUserHaveAValidToken(): boolean {
    return !!this.getToken();
  }

  public getToken(): string {
    return this.cookieService.get(this.environment.authentication.AUTHTOKENNAME);
  }

  public login(user: any): Observable<any> {
    return this.httpService.post(
      this.environment.backend.ENTRY_POINTS.SIGNIN, {
        username: user.username,
        password: user.pwd,
      }).pipe(
        tap(() => {
          // Workaround for the authentication in e2e tests to work on firefox
          if (!this.cookieService.get(this.environment.authentication.AUTHTOKENNAME)) {
            this.cookieService.set(this.environment.authentication.AUTHTOKENNAME, 'true');
          }
        }),
        tap(() => this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME]))
      );
  }

  public logout(): void {
    this.clearSession();

    this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
  }

  public clearSession(): void {
    this.clearHttpCookies();

    this.clearFrontendCookie();
  }

  private clearHttpCookies(): void {
    this.httpService.post(this.environment.backend.ENTRY_POINTS.SIGNOUT)
      .subscribe();
  }

  private clearFrontendCookie(): void {
    this.cookieService.delete(this.environment.authentication.AUTHTOKENNAME);
  }
}

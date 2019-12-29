import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CustomHttpService} from '../../../http/services/custom-http/custom-http.service';
import {Environment} from '../../../../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {UtilService} from 'src/app/shared/services/util/util.service';

// TODO: move to shared services
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private environment = new Environment();

  constructor(private router: Router,
              private httpService: CustomHttpService,
              private cookieService: CookieService,
              private utilService: UtilService) {
  }

  public isAuthenticated(): boolean {
    return !this.utilService.isNullOrUndefined(this.getToken());
  }

  public login(user: any): Observable<any> {
    return this.httpService.post(
      this.environment.backend.ENTRY_POINTS.SIGNIN, {
        username: user.username,
        password: user.pwd,
      }).pipe(
        tap(() => this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME]))
      );
  }

  public logout(): void {
    this.clearSession();

    this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN]);
  }

  public getToken(): string {
    return this.cookieService.get(this.environment.authentication.AUTHTOKENNAME);
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

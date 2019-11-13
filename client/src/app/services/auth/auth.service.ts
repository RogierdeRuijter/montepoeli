import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CustomHttpService} from '../../modules/shared/services/custom-http/custom-http.service';
import {Environment} from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private environment = new Environment();
  constructor(private router: Router,
              private httpService: CustomHttpService,
              private cookieService: CookieService) {
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
      tap((data) => {
        if (data) {
          this.loggedIn = true;
        }
      }),
      tap(() => this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME])));
  }

  public logout(): void {
    this.clearSession();
    this.loggedIn = false;
    this.router.navigate([this.environment.frontend.BASIC_ROUTES.LOGIN_ROUTE]);
  }

  public getToken(): string {
    const temp = this.cookieService.get(this.environment.authentication.TOKENNAME);
    console.log(temp);
    return temp ? temp : '';
  }

  public clearSession(): void {
    // TODO: remove jwt from cookie.
  }
}

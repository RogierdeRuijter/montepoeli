import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CustomHttpService} from '../../modules/shared/services/custom-http/custom-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router,
              private httpService: CustomHttpService) {
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public login(user: any): Observable<any> {
    return this.httpService.post(
      environment.backend.ENTRY_POINTS.SIGNIN, {
        username: user.username,
        password: user.pwd,
      }).pipe(
      tap((data) => {
        if (data) {
          // @ts-ignore
          this.setSession(data.jwt);
          this.loggedIn = true;
        }
      }),
      tap(() => this.router.navigate([environment.frontend.BASIC_ROUTES.HOME])));
  }

  public logout(): void {
    this.clearSession();
    this.loggedIn = false;
    this.router.navigate([environment.frontend.BASIC_ROUTES.LOGIN_ROUTE]);
  }

  public setSession(token: any): void {
    // expires at - seconds . local storage
    // const expiresAt = moment().add(authResult.expiresIn,'second');
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    sessionStorage.setItem(environment.authentication.TOKENNAME, token);
  }

  public getToken(): string {
    const temp = sessionStorage.getItem(environment.authentication.TOKENNAME);
    return temp ? temp : '';
  }

  public clearSession(): void {
    sessionStorage.removeItem(environment.authentication.TOKENNAME);
  }
}

import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router,
              private httpClient: HttpClient) {
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public login(user: any): Observable<any> {
    return this.httpClient.post([
      environment.BACKEND.URL.FULL,
      environment.BACKEND.ENTRY_POINTS.SIGNIN,
    ].join(''), {
      username: user.username,
      password: user.pwd,
    }, {
      withCredentials: true,
      observe: 'response',
    }).pipe(
      tap((data) => {
        console.log(data.body);
        if (data) {
          // @ts-ignore
          this.setSession(data.body.jwt);
          this.loggedIn = true;
        }
      }),
      tap(() => this.router.navigate([environment.FRONTEND.BASIC_ROUTES.HOME])));
  }

  public logout(): void {
    this.clearSession();
    this.loggedIn = false;
    this.router.navigate([environment.FRONTEND.BASIC_ROUTES.LOGIN_ROUTE]);
  }

  public setSession(token: any): void {
    // expires at - seconds . local storage
    // const expiresAt = moment().add(authResult.expiresIn,'second');
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    sessionStorage.setItem(environment.AUTHENTICATION.TOKENNAME, token);
  }

  public getToken(): string {
    const temp = sessionStorage.getItem(environment.AUTHENTICATION.TOKENNAME);

    console.log(temp ? temp : '');
    return temp ? temp : '';
  }

  public clearSession(): void {
    sessionStorage.removeItem(environment.AUTHENTICATION.TOKENNAME);
  }
}

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CustomHttpService } from '../../../http/services/custom-http/custom-http.service';
import { Environment } from '../../../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private environment = new Environment();

  constructor(private router: Router, private httpService: CustomHttpService, private cookieService: CookieService) {}

  public isAuthenticated(): boolean {
    return this.doesTheUserHaveAValidToken();
  }

  public getToken(): string {
    return this.cookieService.get(this.environment.authentication.authTokenName);
  }

  public login(user: any): Observable<any> {
    return this.httpService
      .post(this.environment.backend.entryPoints.signIn, {
        username: user.username,
        password: user.pwd,
      })
      .pipe(tap(() => this.router.navigate([this.environment.frontend.basicRoutes.home])));
  }

  public logout(): void {
    this.clearSession();

    this.router.navigate([this.environment.frontend.basicRoutes.login]);
  }

  public clearSession(): void {
    this.clearHttpCookies();
  }

  private clearHttpCookies(): void {
    this.httpService.post(this.environment.backend.entryPoints.signOut).subscribe();
  }

  private doesTheUserHaveAValidToken(): boolean {
    return this.getToken().includes('true');
  }
}

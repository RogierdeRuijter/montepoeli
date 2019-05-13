import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router,
              private httpClient: HttpClient) {
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.getToken() ? true : false);
      },
    );
    return promise;
  }

  login(user: any) {

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(user.username + ':' + user.pwd),
    });

    return this.httpClient.post([
      environment.BACKEND.URL.FULL,
      environment.BACKEND.ENTRY_POINTS.SIGNIN,
    ].join(''), {
      username: user.username,
      password: user.pwd,
    }, {
      headers: headers,
      observe: 'response',
    })
      .pipe(tap((data) => {
        console.log('login - server response: ' + data);
        if (data) {
          this.setSession(data.headers.get(environment.AUTHENTICATION.TOKENNAME));
          this.loggedIn = true;
          this.router.navigate([environment.FRONTEND.BASIC_ROUTES.HOME]);
        }
      }));
  }

  logout() {
    this.clearSession();
    this.loggedIn = false;
    this.router.navigate([environment.FRONTEND.BASIC_ROUTES.LOGIN_ROUTE]);
  }

  setSession(token: any) {
    // expires at - seconds . local storage
    // const expiresAt = moment().add(authResult.expiresIn,'second');
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    sessionStorage.setItem(environment.AUTHENTICATION.TOKENNAME, token);
  }

  getToken() {
    const temp = sessionStorage.getItem(environment.AUTHENTICATION.TOKENNAME);
    return temp ? temp : '';
  }

  clearSession() {
    sessionStorage.removeItem(environment.AUTHENTICATION.TOKENNAME);
  }


}

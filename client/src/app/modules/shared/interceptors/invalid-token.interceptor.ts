import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {NotificationService} from '../services/notification/notification.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class InvalidTokenInterceptor implements HttpInterceptor {

  public constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private translateService: TranslateService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 && !request.url.includes('signIn')) {
            this.authService.logout();

            this.translateService.get('info.no-valid-session.body')
              .subscribe((message: string) => this.notificationService.info(message));
        }
        return throwError(error);
        }),
      );
  }
}

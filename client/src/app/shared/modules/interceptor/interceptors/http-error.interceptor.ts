import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {NotificationService} from '../../notification/services/notification/notification.service';
import {Injectable} from '@angular/core';
import {InterceptorModule} from '../interceptor.module';

@Injectable({
  providedIn: InterceptorModule,
})
export class HttpErrorInterceptor implements HttpInterceptor {

  public constructor(private notificationService: NotificationService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          const message = error.error.message ? error.error.message : error.message;
          this.notificationService.warning(message);

          return throwError(error);
        }),
      );
  }
}

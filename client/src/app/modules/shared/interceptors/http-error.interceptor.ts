import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { NotificationService } from 'src/app/shared/modules/notification/services/notification/notification.service';

@Injectable({
  providedIn: 'root',
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
          const errorMessage = message;

          this.notificationService.warning(errorMessage);

          return throwError(error);
        }),
      );
  }
}

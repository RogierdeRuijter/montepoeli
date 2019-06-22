import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {LoadingService} from '../loading/loading.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {

  constructor(private httpClient: HttpClient,
              private loadingService: LoadingService) {
  }

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  public get<T>(url: string): Observable<T> {
    this.loadingService.activateDelayedLoading();

    return this.httpClient.get<T>(url, this.httpOptions)
      .pipe(
        map((httpResponse: HttpResponse<T>) => httpResponse.body),
      );
  }

  public post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(url, body, this.httpOptions)
      .pipe(
        map((httpResponse: HttpResponse<T>) => httpResponse.body),
      );
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {LoadingService} from '../loading/loading.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';

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

  private baseUrl: string = environment.environment.backendUrl;

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, this.httpOptions)
      .pipe(
        map((httpResponse: HttpResponse<T>) => httpResponse.body)
      );
  }

  public post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + url, body, this.httpOptions)
      .pipe(
        map((httpResponse: HttpResponse<T>) => httpResponse.body),
      );
  }
}

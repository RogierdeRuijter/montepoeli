import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {

  constructor(private httpClient: HttpClient,
              private loadingService: LoadingService) {
  }

  public get<T>(url: string): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true,
      observe: 'response' as 'response',
    };

    this.loadingService.activateDelayedLoading();

    return this.httpClient.get<T>(url, httpOptions)
      .pipe(
        map((httpResponse: HttpResponse<T>) => httpResponse.body),
      );
  }
}

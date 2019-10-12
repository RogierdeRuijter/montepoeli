import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EnvironmentService} from '../environment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {
  private environment: any;

  private readonly baseUrl: string;

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  constructor(private httpClient: HttpClient,
              private environmentService: EnvironmentService) {
    console.log(environmentService);

    this.environment = this.environmentService.get();
    console.log(this.environment.environment);

    this.baseUrl = this.environment.environment.backendUrl;
  }


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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvironmentService } from '../../../../services/environment/environment.service';
import { Environment } from 'src/environments/environment';

// TODO: move to shared services
@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {
  public httpOptions: any = {
    headers: new HttpHeaders({ contentType: 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response',
  };

  private environment: Environment;

  private baseUrl: string;

  constructor(private httpClient: HttpClient, private environmentService: EnvironmentService) {}

  public get<T>(url: string, params?: { [param: string]: string | string[] }): Observable<T> {
    if (!this.environment) {
      this.initEnvironment();
    }

    if (params) {
      this.httpOptions.params = params;
    }

    return this.httpClient
      .get<T>(this.baseUrl + url, this.httpOptions)
      .pipe(map((httpResponse: HttpResponse<T>) => httpResponse.body));
  }

  public post<T>(url: string, body?: T): Observable<T> {
    if (!this.environment) {
      this.initEnvironment();
    }

    return this.httpClient
      .post<T>(this.baseUrl + url, body, this.httpOptions)
      .pipe(map((httpResponse: HttpResponse<T>) => httpResponse.body));
  }

  private initEnvironment(): void {
    this.environment = this.environmentService.get();

    this.baseUrl = this.environment.environment.backendUrl + '/' + this.environment.backend.apiPrefix;
  }
}

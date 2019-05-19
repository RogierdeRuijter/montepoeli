import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatsService {

  constructor(private httpClient: HttpClient) {
  }

  public getCats(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true,
      observe: 'response' as 'response',
    };

    return this.httpClient.get(environment.BACKEND.URL.FULL + environment.BACKEND.ENTRY_POINTS.CATS, httpOptions);
  }
}

import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Game} from '../interfaces/game.interface';
import {LoadingStore} from '../stores/loading.store';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  public constructor(private httpClient: HttpClient,
                     private loadingStore: LoadingStore) {
  }

  public getGames(): Observable<HttpResponse<Game[]>> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true,
      observe: 'response' as 'response',
    };

    // TODO: create a service for activating the loader
    timer(250).subscribe(() => this.loadingStore.set(true));

    return this.httpClient.get<Game[]>(environment.BACKEND.URL.FULL + environment.BACKEND.ENTRY_POINTS.GAME, httpOptions);
  }
}

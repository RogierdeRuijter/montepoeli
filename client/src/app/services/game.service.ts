import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Game} from '../interfaces/game.interface';
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  public constructor(private httpClient: HttpClient,
                     private loadingService: LoadingService) {
  }

  public getGames(): Observable<HttpResponse<Game[]>> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true,
      observe: 'response' as 'response',
    };

    this.loadingService.activateDelayedLoading();

    return this.httpClient.get<Game[]>(environment.BACKEND.URL.FULL + environment.BACKEND.ENTRY_POINTS.GAME, httpOptions);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Game} from '../interfaces/game.interface';
import {CustomHttpService} from './custom-http.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  public constructor(private httpService: CustomHttpService) {
  }

  public getGames(): Observable<Game[]> {
    return this.httpService.get<Game[]>(environment.BACKEND.URL.FULL + environment.BACKEND.ENTRY_POINTS.GAME);
  }

  public saveGame(game: Game): Observable<Game> {
    return this.httpService.post<Game>(environment.BACKEND.URL.FULL
      + environment.BACKEND.ENTRY_POINTS.GAME
      + environment.BACKEND.ENTRY_POINTS.CREATE, game);
  }
}

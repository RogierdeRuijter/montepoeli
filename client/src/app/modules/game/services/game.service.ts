import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Game} from '../../shared/interfaces/game.interface';
import {CustomHttpService} from '../../shared/services/custom-http/custom-http.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  public constructor(private httpService: CustomHttpService) {
  }

  public getGames(): Observable<Game[]> {
    return this.httpService.get<Game[]>(environment.backend.ENTRY_POINTS.GAME);
  }

  public saveGame(game: Game): Observable<Game> {
    return this.httpService.post<Game>(environment.backend.ENTRY_POINTS.GAME + environment.backend.ENTRY_POINTS.CREATE, game);
  }
}

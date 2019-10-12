import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../shared/interfaces/game.interface';
import {CustomHttpService} from '../../shared/services/custom-http/custom-http.service';
import {Environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public environment = new Environment();
  public constructor(private httpService: CustomHttpService) {
  }

  public getGames(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.environment.backend.ENTRY_POINTS.GAME);
  }

  public saveGame(game: Game): Observable<Game> {
    return this.httpService.post<Game>(this.environment.backend.ENTRY_POINTS.GAME + this.environment.backend.ENTRY_POINTS.CREATE, game);
  }
}

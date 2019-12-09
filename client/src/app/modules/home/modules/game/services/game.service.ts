import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../../../../shared/interfaces/game.interface';
import {CustomHttpService} from '../../../../../shared/modules/http/services/custom-http/custom-http.service';
import {Environment} from '../../../../../../environments/environment';
import { GameModule } from '../game.module';

// TODO: check if this provide in game module still works since it is used in the resolver
@Injectable({
  providedIn: GameModule,
})
export class GameService {
  public environment = new Environment();
  public constructor(private httpService: CustomHttpService) {
  }

  public getAll(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.environment.backend.ENTRY_POINTS.GAME);
  }

  public save(game: Game): Observable<Game> {
    return this.httpService.post<Game>(this.environment.backend.ENTRY_POINTS.GAME + this.environment.backend.ENTRY_POINTS.CREATE, game);
  }
}

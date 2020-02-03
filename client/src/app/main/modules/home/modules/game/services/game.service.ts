import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../../../../../shared/interfaces/game.interface';
import {CustomHttpService} from '../../../../../../shared/modules/http/services/custom-http/custom-http.service';
import {Environment} from '../../../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Winners } from 'src/app/shared/static-files/enums';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public environment = new Environment();
  public constructor(private httpService: CustomHttpService, 
                     private translateService: TranslateService) {
  }

  public getAll(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.environment.backend.ENTRY_POINTS.GAME);
  }

  public save(game: Game): Observable<Game> {
    return this.httpService.post<Game>(this.environment.backend.ENTRY_POINTS.GAME + this.environment.backend.ENTRY_POINTS.CREATE, game);
  }

  public postProcessGame(game: Game): Game {
    if (game.winner === this.translateService.instant('pages.home.games.cell.winner.' + Winners.DRAW)) {
      game.winner = '-';
    }
    return game;
  }
}

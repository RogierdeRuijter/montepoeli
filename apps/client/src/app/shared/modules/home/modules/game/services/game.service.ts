import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Game} from '../../../../../../shared/interfaces/game.interface';
import {CustomHttpService} from '../../../../../../shared/modules/http/services/custom-http/custom-http.service';
import {Environment} from '../../../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Winners } from '../../../../../static-files/enums';
import { map, takeUntil } from 'rxjs/operators';
import { GameStore } from 'src/app/shared/stores/game.store';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public environment = new Environment();
  public constructor(private httpService: CustomHttpService,
                     private translateService: TranslateService,
                     private gameStore: GameStore,
                     private socket: Socket) {
  }

  public getAll(destory$: Subject<void>): Observable<Game[]> {
    return this.gameStore.get(destory$);
  }

  // TODO: figure out if subscriptions in a service are a good idea
  public fillGameStoreWithGamesFromApi(destory$: Subject<void>): void {
    this.getAllFromApi()
      .pipe(
        takeUntil(destory$)
      ).subscribe((games: Game[]) => this.fillGameStore(games));
  }

  public getAllFromApi(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.environment.backend.ENTRY_POINTS.GAME)
    .pipe(
      map((games: Game[]) => games.map((game: Game) => this.postProcessGame(game)))
    );
  }

  public receiveGamesUpdate(): Observable<string[]> {
    return this.socket.fromEvent('games');
  }

  public fillGameStore(games: Game[]): void {
    this.gameStore.set(games);
  }

  public save(game: Game): Observable<Game> {
    return this.httpService.post<Game>(this.environment.backend.ENTRY_POINTS.GAME + this.environment.backend.ENTRY_POINTS.CREATE, game);
  }

  public postProcessGame(game: Game): Game {
    if (game.winner === null) {
      game.winner = this.translateService.instant('pages.home.games.labels.' + Winners.DRAW);
    }
    return game;
  }

  public filterIdsThatExistInTheGames(gameIds: string[], games: Game[]): string[] {
    return [];
  }
}

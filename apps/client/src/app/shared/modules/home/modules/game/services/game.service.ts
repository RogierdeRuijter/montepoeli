import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from '../../../../../../shared/interfaces/game.interface';
import { CustomHttpService } from '../../../../../../shared/modules/http/services/custom-http/custom-http.service';
import { Environment } from '../../../../../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Winners } from '../../../../../static-files/enums';
import { map, takeUntil } from 'rxjs/operators';
import { GameStore } from '../../../../../../shared/stores/game.store';
import { BadRequest } from '../../../../../../../errors/bad-request.error';
import { SortService } from '../../../../../../shared/services/sort/sort.service';
import { WebsocketService } from '../../../../../../shared/services/websocket/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public environment = new Environment();
  public constructor(
    private httpService: CustomHttpService,
    private translateService: TranslateService,
    private gameStore: GameStore,
    private sortService: SortService
  ) {}

  public getAll(destory$: Subject<void>): Observable<Game[]> {
    return this.gameStore.get(destory$);
  }

  // TODO: figure out if subscriptions in a service are a good idea
  public fillGameStoreWithGamesFromApi(destory$: Subject<void>): void {
    this.getAllFromApi()
      .pipe(takeUntil(destory$))
      .subscribe((games: Game[]) => this.fillGameStore(games));
  }

  public getAllFromApi(): Observable<Game[]> {
    return this.httpService
      .get<Game[]>(this.environment.backend.entryPoints.game)
      .pipe(map((games: Game[]) => games.map((game: Game) => this.postProcessGame(game))));
  }

  public receiveGamesUpdate(socket: WebsocketService): Observable<string[]> {
    return socket.fromEvent('games');
  }

  public fillGameStore(games: Game[]): void {
    this.gameStore.set(games);
  }

  public save(game: Game): Observable<Game> {
    return this.httpService.post<Game>(
      this.environment.backend.entryPoints.game + this.environment.backend.entryPoints.create,
      game
    );
  }

  public postProcessGame(game: Game): Game {
    if (game.winner === null) {
      game.winner = this.translateService.instant('pages.home.games.labels.' + Winners.draw);
    }
    game.date = new Date(game.date);
    return game;
  }

  public filterIdsThatExistInTheGames(gameIds: string[], games: Game[]): string[] {
    if (games === undefined) {
      throw new BadRequest('games should not be undefined');
    }

    return gameIds?.filter((gameId: string) => {
      const game: Game = this.findGameByGameId(gameId, games);

      if (!game) {
        return true;
      } else {
        return false;
      }
    });
  }

  public getGamesByIds(gameIds: string[]): Observable<Game[]> {
    return this.httpService
      .get<Game[]>(this.environment.backend.entryPoints.game + this.environment.backend.entryPoints.BY_IDS, {
        gameIds,
      })
      .pipe(map((games: Game[]) => games.map((game: Game) => this.postProcessGame(game))));
  }

  public sortGames(games: Game[]): Game[] {
    return this.sortService.sortByDateDescending(games);
  }

  public updateAll(games: Game[]): void {
    this.gameStore.set(games);
  }
  
  private findGameByGameId(gameId: string, games: Game[]): Game {
    return games.find((game: Game) => game.id === gameId);
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Game} from '../../../../shared/interfaces/game.interface';
import {CustomHttpService} from '../../../../shared/services/custom-http/custom-http.service';
import {Environment} from '../../../../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public environment = new Environment();

  public constructor(private httpService: CustomHttpService,
                     private cookieService: CookieService) {
  }

  public getGames(): Observable<Game[]> {
    return this.httpService.get<Game[]>(this.environment.backend.ENTRY_POINTS.GAME);
  }

  public saveGame(game: Game): Observable<Game> {
    return this.httpService.post<Game>(this.environment.backend.ENTRY_POINTS.GAME + this.environment.backend.ENTRY_POINTS.CREATE, game);
  }

  public getAmountOfLoadingGames(): number {
    const nameOfCookie = 'amountOfLoadingGames';
    const amountOfLoadingGames: number = Number(this.cookieService.get(nameOfCookie));

    if (!amountOfLoadingGames || isNaN(amountOfLoadingGames)) {
      this.getDefaultAmountOfLoadingGames();
    } else {
      return amountOfLoadingGames;
    }
  }

  private getDefaultAmountOfLoadingGames(): number {
    return 2;
  }

  public setAmountOfLoadingGamesInCookie(games: Game[]): void {
    const nameOfCookie = 'amountOfLoadingGames';
    const amountOfLoadingGames: string = this.cookieService.get(nameOfCookie);

    if (!amountOfLoadingGames) {
      this.setCookie(nameOfCookie, games);
    }
  }

  private setCookie(nameOfCookie: string, games: Game[]): void {
    this.cookieService.set(nameOfCookie, games.length.toString(), 365);
  }
}

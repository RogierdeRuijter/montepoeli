import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Game} from '../../shared/interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private cookieService: CookieService) {
  }

  public setAmountOfLoadingGamesInCookie(games: Game[]): void {
    const nameOfCookie = 'amountOfLoadingGames';
    const amountOfLoadingGames: string = this.cookieService.get(nameOfCookie);

    if (!amountOfLoadingGames) {
      this.setCookie(nameOfCookie, games);
    }
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

  private setCookie(nameOfCookie: string, games: Game[]): void {
    this.cookieService.set(nameOfCookie, games.length.toString());
  }

  private getDefaultAmountOfLoadingGames(): number {
    return 2;
  }

}

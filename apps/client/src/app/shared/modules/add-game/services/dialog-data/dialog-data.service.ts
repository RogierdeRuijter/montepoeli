import {Injectable} from '@angular/core';
import {User} from '../../../../interfaces/user.interface';
import {Game} from '../../../../interfaces/game.interface';
import {UtilService} from '../../../../services/util/util.service';

@Injectable({
  providedIn: 'root',
})
export class DialogDataService {

  constructor(private utilService: UtilService) {
  }

  public determineAvailableUsersForSelect(users: User[], game: Game, selectName: string): User[] {
    return users;
    // const chosenUserName: string[] = [];

    // if (!this.utilService.isNullOrUndefined(game.white) && selectName !== 'white') {
    //   chosenUserName.push(game.white);
    // }

    // if (!this.utilService.isNullOrUndefined(game.black) && selectName !== 'black') {
    //   chosenUserName.push(game.black);
    // }

    // return users.filter((user: User) => chosenUserName.includes(user.name) === false);
  }

  public allFieldsAreDefined(game: Game): boolean {
    return !this.utilService.isNullOrUndefined(game.white)
      && !this.utilService.isNullOrUndefined(game.black)
      && !this.utilService.isNullOrUndefined(game.winner);
  }

  public userAreDefined(game: Game): boolean {
    return !this.utilService.isNullOrUndefined(game.white)
    && !this.utilService.isNullOrUndefined(game.black);
  }

  public determineDisabledWinnerOptions(winnerOptions: string[], game: Game, draw: string): boolean[] {
    if (game.black && game.white) {
      return winnerOptions.map((winnerOption: string) => {
        if (winnerOption === game.white || winnerOption === game.black || winnerOption === draw) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      return winnerOptions.map(() => true);
    }
  }
}

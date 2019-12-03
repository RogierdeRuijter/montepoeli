import {Injectable} from '@angular/core';
import {User} from '../../../../../shared/interfaces/user.interface';
import {Game} from '../../../../../shared/interfaces/game.interface';
import {UtilService} from '../../../../../shared/services/util/util.service';

@Injectable({
  providedIn: 'root',
})
export class DialogDataService {

  constructor(private utilService: UtilService) {
  }

  public determineAvailableUsersForSelect(users: User[], game: Game, selectName: string): User[] {
    const chosenUserName: string[] = [];

    if (!this.utilService.isNullOrUndefined(game.white) && selectName !== 'white') {
      chosenUserName.push(game.white);
    }

    if (!this.utilService.isNullOrUndefined(game.black) && selectName !== 'black') {
      chosenUserName.push(game.black);
    }

    return users.filter((user: User) => chosenUserName.includes(user.name) === false);
  }

  public allFieldsAreDefined(game: Game): boolean {
    return !this.utilService.isNullOrUndefined(game.white)
      && !this.utilService.isNullOrUndefined(game.winner)
      && !this.utilService.isNullOrUndefined(game.black);
  }

}

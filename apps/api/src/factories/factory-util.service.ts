import * as faker from 'faker';
import { User } from 'src/models/interfaces/user.interface';
import { Game } from 'src/models/interfaces/game.interface';

export class FactoryUtilService {
  public id(): string {
    return faker.random.uuid();
  }

  public name(): string {
    return faker.name.firstName();
  }

  public passwordHash(): string {
    return faker.random.alphaNumeric();
  }

  public date(): Date {
    return new Date();
  }

  public randomWinner(blackId: string, whiteId: string): string {
    const num: number = faker.random.number() % 3;

    if (num === 0) {
      return blackId;
    }

    if (num === 1) {
      return whiteId;
    }

    return undefined;
  }

  public getWinnerName(game: Game, blackUser: User, whiteUser: User): string {
    if (!game.winner) {
      return undefined;
    }

    if (game.winner === blackUser.id) {
      return blackUser.name;
    } else {
      return whiteUser.name;
    }
  }
}

import * as faker from 'faker';

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

  public getWinnerColor(winnerId: string, blackId: string): string {
    if (!winnerId) {
      return undefined;
    }

    if (winnerId === blackId) {
      return 'black';
    } else {
      return 'white';
    }
  }
}

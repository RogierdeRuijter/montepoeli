import {Factory} from './factory';
import {Game} from '../models/interfaces/game.interface';
import {FactoryUtilService} from './factory-util.service';

export class GameFactory implements Factory<Game> {
  private factoryUtilService = new FactoryUtilService();

  public create(blackId?: string, whiteId?: string): Game {
    const black = blackId ? blackId : this.factoryUtilService.id();
    const white = whiteId ? whiteId : this.factoryUtilService.id();

    return {
      black,
      white,
      winner: this.factoryUtilService.randomWinner(black, white),
      date: this.factoryUtilService.date(),
    };
  }

  public createMany(amount: number, blackId?: string, whiteId?: string): Game[] {
    const list: Game[] = [];

    for (let i = 0; i < amount; i++) {
      list.push(this.create(blackId, whiteId));
    }

    return list;
  }
}

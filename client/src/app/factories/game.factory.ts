import {Factory} from '../interfaces/factory.interface';
import {Game} from '../interfaces/game.interface';

export class GameFactory implements Factory<Game> {
  public create(game?: Game): Game {
    return {
      black: game ? game.black : null,
      winner: game ? game.winner : null,
      white: game ? game.white : null,
    };
  }

}

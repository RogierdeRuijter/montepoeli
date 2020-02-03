import {Factory} from '../../../../../../shared/interfaces/factory.interface';
import {Game} from '../../../../../../shared/interfaces/game.interface';

export class GameFactory implements Factory<Game> {
  public create(game?: Game): Game {
    return {
      black: game ? game.black : null,
      winner: game ? game.winner : null,
      white: game ? game.white : null,
    };
  }

}

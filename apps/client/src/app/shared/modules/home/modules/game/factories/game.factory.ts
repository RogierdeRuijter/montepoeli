import {Factory} from '../../../../../../shared/interfaces/factory.interface';
import {Game} from '../../../../../../shared/interfaces/game.interface';
import { v4 as uuidv4 } from 'uuid';

export class GameFactory implements Factory<Game> {
  public create(game?: Game): Game {
    return {
      id: game ? game.id : uuidv4(),
      black: game ? game.black : null,
      winner: game ? game.winner : null,
      white: game ? game.white : null,
      date: game ? game.date : new Date()
    };
  }

}

import {Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class GameRepositoryService {
  // TODO: find a way to type model
  constructor(@InjectModel('Game') private readonly gameModel: Model<any>) {
  }

  public find(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  public save(game: Game): Promise<Game> {
    return new this.gameModel(game).save();
  }

}

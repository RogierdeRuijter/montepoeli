import {Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class GameRepositoryService {
  constructor(@InjectModel('Game') private readonly gameModel: Model<Game>) {
  }

  public find(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  public save(game: Game): Promise<Game> {
    return new this.gameModel(game).save();
  }

}

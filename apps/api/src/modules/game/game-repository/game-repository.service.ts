import {Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {InjectModel} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { GameMongo } from 'apps/api/src/models/mongo-interfaces/game-mongo.interface';


@Injectable()
export class GameRepositoryService {
  constructor(@InjectModel('Game') private readonly gameModel: mongoose.Model<any>) {
    // TODO: remove when no longer needed
    mongoose.set('debug', true);
  }

  public find(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  public save(game: GameMongo): Promise<Game> {
    return new this.gameModel(game).save();
  }

  public async findByIds(ids: string[]): Promise<Game[]> {
    // TODO: write migration script for production ids
    return this.gameModel.find().where('_id').in(ids).exec();
  }

}

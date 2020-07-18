import {Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';
import { GameMongo } from 'apps/api/src/models/mongo-interfaces/game-mongo.interface';

@Injectable()
export class GameRepositoryService {
  constructor(@InjectModel('Game') private readonly gameModel: Model<any>) {
  }

  public find(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  public save(game: GameMongo): Promise<Game> {
    return new this.gameModel(game).save();
  }

  public async findByIds(ids: string[]): Promise<Game[]> {
    const games = await this.gameModel.find({_id: '5f12ceb7ec3d64003391f7ea'}).exec();

    // 'ObjectId("5f12ceb7ec3d64003391f7ea")', '5f12ceb7ec3d64003391f7ea'

    console.log('findByIds, games: ', games);


    return this.gameModel.find().where('_id').in(ids).exec();
  }

}

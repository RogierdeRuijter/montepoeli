import { Injectable } from '@nestjs/common';
import { Game } from '../../../models/interfaces/game.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameMongo } from '../../../models/mongo-interfaces/game-mongo.interface';

@Injectable()
export class GameRepositoryService {
  constructor(@InjectModel('Game') private readonly gameModel: Model<any>) {}

  public find(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  public save(game: GameMongo): Promise<Game> {
    return new this.gameModel(game).save();
  }

  public async findByIds(ids: string[]): Promise<Game[]> {
    return this.gameModel.find().where('_id').in(ids).exec();
  }
}

import {Model} from 'mongoose';
import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Game} from '../models/interfaces/game.interface';
import {CreateGameDto} from '../models/create-dtos/create-game.dto';
import {GameMapper} from './game.mapper';
import {GameDto} from '../models/dtos/game.dto';
import {SortService} from '../shared/sort.service';

@Injectable()
export class GameService {
  public constructor(@InjectModel('Game') private readonly gameModel: Model<Game>,
                     private readonly gameMapper: GameMapper,
                     private readonly sortService: SortService) {
  }

  public getGames(): Promise<GameDto[]> {
    return new Promise<GameDto[]>(resolve => {
      this.gameModel.find().exec().then((games: Game[]) => {
        games = this.sortService.sortByDate(games);
        this.gameMapper.convertGames(games).then((gameDtos: GameDto[]) => resolve(gameDtos));
        },
      );
    });
  }

  public create(createGameDto: CreateGameDto): Promise<Game> {
    if (this.validDto(createGameDto)) {
      return this.gameMapper.convertCreateDto(createGameDto)
        .then((game: Game) => new this.gameModel(game).save());
    }
  }

  private validDto(createGameDto: CreateGameDto): boolean {
    if (!createGameDto.black || !createGameDto.white || !createGameDto.winner) {
      throw new BadRequestException('not all fields defined');
    }

    return true;
  }
}

import {BadRequestException, Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';
import {GameDto} from '../../../models/dtos/game.dto';
import {SortService} from '../../shared/services/sort/sort.service';
import {GameMapperService} from '../game-mapper/game-mapper.service';
import {GameRepositoryService} from '../game-repository/game-repository.service';
import { GameMongo } from 'apps/api/src/models/mongo-interfaces/game-mongo.interface';

@Injectable()
export class GameService {
  public constructor(private readonly gameMapper: GameMapperService,
                     private readonly sortService: SortService,
                     private readonly gameRepositoryService: GameRepositoryService) {
  }

  public async getGames(): Promise<GameDto[]> {
    const unSortedGames: Game[] = await this.getAllGames();

    const games = this.sortService.sortByDateDescending(unSortedGames);

    return this.gameMapper.convertGames(games);
  }

  public create(createGameDto: CreateGameDto): Promise<Game> {
    if (this.validDto(createGameDto)) {
      return this.gameMapper.convertCreateDto(createGameDto)
        .then((game: GameMongo) => this.gameRepositoryService.save(game));
    }
  }

  private validDto(createGameDto: CreateGameDto): boolean {
    if (!createGameDto.id || !createGameDto.black || !createGameDto.white || !createGameDto.winner) {
      throw new BadRequestException('not all fields defined');
    }

    return true;
  }

  public async getAllIdsFromGames(): Promise<string[]> {
    const games: Game[] = await this.getAllGames();


    return games?.map((game: Game) => game.id);
  }

  public getAllGames(): Promise<Game[]> {
    return this.gameRepositoryService.find();
  }

  public getGamesByIds(gameIds: string[]): Promise<Game[]> {
    return this.gameRepositoryService.findByIds(gameIds);
  }
}

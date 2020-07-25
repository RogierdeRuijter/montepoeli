import {BadRequestException, Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';
import {GameDto} from '../../../models/dtos/game.dto';
import {SortService} from '../../shared/services/sort/sort.service';
import {GameMapperService} from '../game-mapper/game-mapper.service';
import {GameRepositoryService} from '../game-repository/game-repository.service';
import { GameMongo } from 'apps/api/src/models/mongo-interfaces/game-mongo.interface';
import { GameGateway } from '../game-gateway/game.gateway';
import { GameUtilService } from '../game-util/game-util.service';

@Injectable()
export class GameService {
  public constructor(private readonly gameMapper: GameMapperService,
                     private readonly sortService: SortService,
                     private readonly gameRepositoryService: GameRepositoryService,
                     private readonly syncGameGateway: GameGateway) {
  }

  public async getGames(): Promise<GameDto[]> {
    const unSortedGames: Game[] = await this.getAllGames();

    const games = this.sortService.sortByDateDescending(unSortedGames);

    return this.gameMapper.convertGames(games);
  }

  public async create(createGameDto: CreateGameDto): Promise<Game> {
    if (this.validDto(createGameDto)) {
      const gameMongo: GameMongo = await this.gameMapper.convertCreateDto(createGameDto)
      const game: Game = await this.gameRepositoryService.save(gameMongo);

      this.emitAllGameIds();

      return game;
    }
  }

  private validDto(createGameDto: CreateGameDto): boolean {
    if (!createGameDto.id || !createGameDto.black || !createGameDto.white || !createGameDto.winner) {
      throw new BadRequestException('not all fields defined');
    }

    return true;
  }

  private async emitAllGameIds(): Promise<void> {
      const gameIds: string[] = await this.getAllIdsFromGames();

      this.syncGameGateway.emitGames(gameIds);
  }

  public async getGamesByIds(gameIds: string[]): Promise<GameDto[]> {
    const games: Game[] = await this.gameRepositoryService.findByIds(gameIds);

    return this.gameMapper.convertGames(games);
  }

  public async getAllIdsFromGames(): Promise<string[]> {
    const games: Game[] = await this.getAllGames();

    return games?.map((game: Game) => game.id);
  }

  public getAllGames(): Promise<Game[]> {
    return this.gameRepositoryService.find();
  }
}

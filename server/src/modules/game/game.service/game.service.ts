import {BadRequestException, Injectable} from '@nestjs/common';
import {Game} from '../../../models/interfaces/game.interface';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';
import {GameDto} from '../../../models/dtos/game.dto';
import {SortService} from '../../shared/services/sort/sort.service';
import {GameMapperService} from '../game-mapper/game-mapper.service';
import {GameRepositoryService} from '../game-repository/game-repository.service';

@Injectable()
export class GameService {
  public constructor(private readonly gameMapper: GameMapperService,
                     private readonly sortService: SortService,
                     private readonly gameRepositoryService: GameRepositoryService) {
  }

  public async getGames(): Promise<GameDto[]> {
    const unSortedGames: Game[] = await this.gameRepositoryService.find();
    const games = this.sortService.sortByDateDescending(unSortedGames);

    return this.gameMapper.convertGames(games);
  }

  public create(createGameDto: CreateGameDto): Promise<Game> {
    if (this.validDto(createGameDto)) {
      return this.gameMapper.convertCreateDto(createGameDto)
        .then((game: Game) => this.gameRepositoryService.save(game));
    }
  }

  private validDto(createGameDto: CreateGameDto): boolean {
    if (!createGameDto.black || !createGameDto.white || !createGameDto.winner) {
      throw new BadRequestException('not all fields defined');
    }

    return true;
  }
}

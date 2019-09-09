import {Game} from '../../../models/interfaces/game.interface';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';
import {GameDto} from '../../../models/dtos/game.dto';
import {SortService} from '../../shared/services/sort/sort.service';
import {GameMapperService} from '../game-mapper/game-mapper.service';
import {GameRepositoryService} from '../game-repository/game-repository.service';

export declare class GameService {
    private readonly gameMapper;
    private readonly sortService;
    private readonly gameRepositoryService;
    constructor(gameMapper: GameMapperService, sortService: SortService, gameRepositoryService: GameRepositoryService);
    getGames(): Promise<GameDto[]>;
    create(createGameDto: CreateGameDto): Promise<Game>;
    private validDto;
}

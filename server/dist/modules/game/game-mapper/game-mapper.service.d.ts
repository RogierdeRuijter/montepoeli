import {UtilService} from '../../shared/services/util/util.service';
import {User} from '../../../models/interfaces/user.interface';
import {GameDto} from '../../../models/dtos/game.dto';
import {Game} from '../../../models/interfaces/game.interface';
import {CreateGameDto} from '../../../models/create-dtos/create-game.dto';
import {UserRepositoryService} from '../../users/user-repository/user-repository.service';

export declare class GameMapperService {
    private readonly userRepositoryService;
    private readonly utilService;
    constructor(userRepositoryService: UserRepositoryService, utilService: UtilService);
    convertGames(games: Game[]): Promise<GameDto[]>;
    swapUsersIdsWithNames(games: Game[], users: User[]): GameDto[];
    convertCreateDto(createGameDto: CreateGameDto): Promise<Game>;
    private getWinnerColor;
    private getWinnerName;
}

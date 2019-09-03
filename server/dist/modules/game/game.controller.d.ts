import {GameService} from './game.service/game.service';
import {Game} from '../../models/interfaces/game.interface';
import {CreateGameDto} from '../../models/create-dtos/create-game.dto';
import {GameDto} from '../../models/dtos/game.dto';

export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    getAll(): Promise<GameDto[]>;
    create(body: CreateGameDto): Promise<Game>;
}

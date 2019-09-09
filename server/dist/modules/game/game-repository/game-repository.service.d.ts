import {Game} from '../../../models/interfaces/game.interface';
import {Model} from 'mongoose';

export declare class GameRepositoryService {
    private readonly gameModel;
    constructor(gameModel: Model<Game>);
    find(): Promise<Game[]>;
    save(game: Game): Promise<Game>;
}

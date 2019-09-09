import {Factory} from './factory';
import {Game} from '../models/interfaces/game.interface';

export declare class GameFactory implements Factory<Game> {
    private factoryUtilService;
    create(blackId?: string, whiteId?: string): Game;
    createMany(amount: number, blackId?: string, whiteId?: string): Game[];
}

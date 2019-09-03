import {Factory} from './factory';
import {GameDto} from '../models/dtos/game.dto';

export declare class GameDtoFactory implements Factory<GameDto> {
    private factoryUtilService;
    create(blackName?: string, whiteName?: string, winner?: string): GameDto;
    createMany(amount: number, blackId?: string, whiteId?: string): GameDto[];
}

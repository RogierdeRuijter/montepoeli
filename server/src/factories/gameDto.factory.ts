import {Factory} from './factory';
import {FactoryUtilService} from './factory-util.service';
import {GameDto} from '../models/dtos/game.dto';

export class GameDtoFactory implements Factory<GameDto> {
  private factoryUtilService = new FactoryUtilService();

  public create(blackName?: string, whiteName?: string, winner?: string): GameDto {
    const black = blackName ? blackName : this.factoryUtilService.name();
    const white = whiteName ? whiteName : this.factoryUtilService.name();

    return {black, white, winner};
  }

  public createMany(amount: number, blackId?: string, whiteId?: string): GameDto[] {
    throw new Error('not defined');
  }
}

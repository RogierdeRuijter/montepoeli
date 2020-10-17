import { Factory } from './factory';
import { FactoryUtilService } from './factory-util.service';
import { GameDto } from '../models/dtos/game.dto';

export class GameDtoFactory implements Factory<GameDto> {
  private factoryUtilService = new FactoryUtilService();

  public create(idValue?: string, blackName?: string, whiteName?: string, winner?: string, dateValue?: Date): GameDto {
    const id = idValue ? idValue : this.factoryUtilService.id();
    const black = blackName ? blackName : this.factoryUtilService.name();
    const white = whiteName ? whiteName : this.factoryUtilService.name();
    const date = dateValue ? dateValue : this.factoryUtilService.date();

    return { id, black, white, winner, date };
  }

  public createMany(amount: number, blackId?: string, whiteId?: string): GameDto[] {
    throw new Error('not defined');
  }
}

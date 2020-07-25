import {Module} from '@nestjs/common';
import {GameService} from './game.service/game.service';
import {GameController} from './game.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from '../auth/auth.module';
import {GameSchema} from '../../schemas/game.schema';
import {SharedModule} from '../shared/shared.module';
import {GameMapperService} from './game-mapper/game-mapper.service';
import {GameRepositoryService} from './game-repository/game-repository.service';
import {UsersModule} from '../users/users.module';
import { GameGateway } from './game-gateway/game.gateway';
import { GameUtilService } from './game-util/game-util.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Game', schema: GameSchema}]),
    AuthModule,
    SharedModule,
    UsersModule
  ],
  providers: [
    GameService,
    GameMapperService,
    GameRepositoryService,
    GameGateway,
    GameUtilService
  ],
  controllers: [GameController],
})
export class GameModule {
}

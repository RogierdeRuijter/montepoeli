import {Module} from '@nestjs/common';
import {GameService} from './game.service';
import {GameController} from './game.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from '../auth/auth.module';
import {GameSchema} from '../../schemas/game.schema';
import {UserSchema} from '../../schemas/user.schema';
import {SharedModule} from '../shared/shared.module';
import {GameMapperService} from './game-mapper/game-mapper.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Game', schema: GameSchema}]),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    AuthModule,
    SharedModule,
  ],
  providers: [GameService, GameMapperService],
  controllers: [GameController],
  exports: [],
})
export class GameModule {
}

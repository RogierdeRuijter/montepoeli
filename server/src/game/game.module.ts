import {Module} from '@nestjs/common';
import {GameService} from './game.service';
import {GameController} from './game.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from '../auth/auth.module';
import {GameSchema} from '../schemas/game.schema';
import {UserSchema} from '../schemas/user.schema';
import {GameMapper} from './game.mapper';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Game', schema: GameSchema}]),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    AuthModule,
  ],
  providers: [GameService, GameMapper],
  controllers: [GameController],
  exports: [],
})
export class GameModule {
}

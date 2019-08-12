import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from '../auth/auth.module';
import {UsersModule} from '../users/users.module';
import {GameModule} from '../game/game.module';

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const mongoDNS = process.env.MONGO_DNS_NAME;

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://' + username + ':' + password + '@' + mongoDNS + '/admin'),
    AuthModule,
    UsersModule,
    GameModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}

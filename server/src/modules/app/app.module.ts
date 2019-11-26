import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from '../auth/auth.module';
import {UsersModule} from '../users/users.module';
import {GameModule} from '../game/game.module';
import {RuleModule} from '../rule/rule.module';

const username = 'root';
const password = 'example';

const mongoDNS = 'localhost';

const constructDatabaseUrl = () => {
  let url = 'mongodb://';
  if (username && password) {
    url += username + ':' + password + '@';
  }
  url += mongoDNS + '/admin';
  return url;
};

@Module({
  imports: [
    MongooseModule.forRoot(constructDatabaseUrl()),
    AuthModule,
    UsersModule,
    GameModule,
    RuleModule
  ],
  controllers: [AppController]
})
export class AppModule {
}

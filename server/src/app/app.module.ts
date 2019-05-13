import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsModule} from '../cats/cats.module';
import {AuthModule} from '../auth/auth.module';
import {UsersModule} from '../users/users.module';

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://' + username + ':' + password + '@mongodb/admin'),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsModule} from '../cats/cats.module';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://root:example@mongodb/admin'),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';
import {CatSchema} from '../schemas/cat.schema';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
    AuthModule
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

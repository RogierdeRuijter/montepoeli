import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
// import { MongooseModule } from '@nestjs/mongoose';
// MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

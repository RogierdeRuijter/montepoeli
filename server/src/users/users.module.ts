import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema} from '../schemas/user.schema';
import {UserMapper} from './user.mapper';
import {UsersController} from './users.controller';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UserMapper],
  exports: [UsersService]
})
export class UsersModule {}

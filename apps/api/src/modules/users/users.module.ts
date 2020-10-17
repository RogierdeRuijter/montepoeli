import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../schemas/user.schema';
import { UserMapper } from './user.mapper';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';
import { UserRepositoryService } from './user-repository/user-repository.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), AuthModule, SharedModule],
  controllers: [UsersController],
  providers: [UsersService, UserMapper, UserRepositoryService],
  exports: [UsersService, UserRepositoryService],
})
export class UsersModule {}

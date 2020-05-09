import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {AuthService} from './auth.service';
import {JwtStrategy} from '../../jwt.strategy';
import {PassportModule} from '@nestjs/passport';
import {UsersService} from '../users/users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema} from '../../schemas/user.schema';
import {UserMapper} from '../users/user.mapper';
import {UserRepositoryService} from '../users/user-repository/user-repository.service';
import {SharedModule} from '../shared/shared.module';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false
    }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    JwtModule.register({
      secret: process.env.SERVER_SECRET,
      signOptions: {
        expiresIn: '365 days',
      },
    }),
    SharedModule,
  ],
  providers: [AuthService,
    JwtStrategy,
    UsersService,
    UserMapper,
    UserRepositoryService],
  exports: [PassportModule, AuthService, JwtModule],
})
export class AuthModule {}

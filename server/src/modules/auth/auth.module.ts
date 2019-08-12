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
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    JwtModule.register({
      secretOrPrivateKey: process.env.SERVER_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    SharedModule,
  ],
  providers: [AuthService,
    JwtStrategy,
    UsersService,
    UserMapper,
    UserRepositoryService],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}

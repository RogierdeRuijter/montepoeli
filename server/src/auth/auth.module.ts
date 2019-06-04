import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {AuthService} from './auth.service';
import {JwtStrategy} from '../jwt.strategy';
import {PassportModule} from '@nestjs/passport';
import {UsersService} from '../users/users.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema} from '../schemas/user.schema';
import {UserMapper} from '../users/user.mapper';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    JwtModule.register({
      secretOrPrivateKey: process.env.SERVER_SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    })
  ],
  providers: [AuthService, JwtStrategy, UsersService, UserMapper],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}

import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from './modules/auth/auth.service';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtPayload} from './models/interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([(req) => {
        let token = null;

        if (req && req.signedCookies) {
          token = req.signedCookies.montepoeliJwt;
        }

        return token;
      }]),
      secretOrKey: process.env.SERVER_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

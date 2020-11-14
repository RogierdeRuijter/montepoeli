import { INestApplicationContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cookieParser from 'cookie-parser';
import * as cookie from 'cookie';

export class AuthenticatedSocketIoAdapter extends IoAdapter {
  private readonly jwtService: JwtService;
  constructor(private app: INestApplicationContext) {
    super(app);
    this.jwtService = this.app.get(JwtService);
  }

  createIOServer(port: number, options?: any): any {
    options.allowRequest = async (request, allowFunction) => {
      // TODO: make this a method
      const signedCookies = request.headers.cookie;

      const jsonSignedCookies = cookie.parse(signedCookies);

      const montepoeliJwtSigned = jsonSignedCookies.montepoeliJwt;
      const montepoeliJwt = cookieParser.signedCookie(montepoeliJwtSigned, process.env.COOKIE_SECRET);

      const verified = montepoeliJwt && (await this.jwtService.verify(montepoeliJwt));

      if (verified) {
        return allowFunction(null, true);
      }

      return allowFunction('Unauthorized', false);
    };

    return super.createIOServer(port, options);
  }
}

import {JwtService} from '@nestjs/jwt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtPayload} from '../interfaces/jwt-payload.interface';
import {User} from '../interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
  }

  async signIn(body): Promise<any> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    return new Promise<any>((resolve, reject) => this.usersService.verifyUser(body)
      .then((user: User) => {
        const jwtPayload: JwtPayload = {username: user.username};
        resolve({jwt: this.jwtService.sign(jwtPayload)});
      }).catch((err) => {
        reject(new UnauthorizedException(err));
      }),
    );
  }

  public async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findByUsername(payload);
  }
}

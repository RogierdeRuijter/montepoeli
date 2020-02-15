import {JwtService} from '@nestjs/jwt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtPayload} from '../../models/interfaces/jwt-payload.interface';
import {User} from '../../models/interfaces/user.interface';
import { UserMapper } from '../users/user.mapper';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly userMapper: UserMapper
  ) {
  }

  async signIn(body): Promise<any> {
    return new Promise<any>((resolve, reject) => this.usersService.verifyUser(body)
      .then((user: User) => {
        const userDto = this.userMapper.convert(user);
        console.log(userDto);
        const jwtPayload: JwtPayload = {username: user.username};
        resolve(
          { jwt: this.jwtService.sign(jwtPayload), 
            userDto
          }
        );
      }).catch((err) => {
        reject(new UnauthorizedException('Wrong username or password.'));
      }),
    );
  }

  public async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findByUsername(payload);
  }
}

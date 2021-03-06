import { BadRequestException, Body, Controller, Next, Post, Res } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../../models/interfaces/user.interface';
import { AuthService } from '../auth/auth.service';
import { Response } from 'express';
import { CreateUserDto } from '../../models/create-dtos/create-user.dto';

@Controller()
export class AppController {
  private secure: boolean = process.env.ENV.toString() === 'prod' ? true : false;

  // private sameSite: string = process.env.ENV.toString() === 'prod' ? 'Strict' : undefined;
  // private signed: boolean = process.env.ENV.toString() === 'prod' ? true : undefined;

  private domain: string = process.env.ENV.toString() === 'prod' ? process.env.DOMAIN : undefined;

  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @Post('/signIn')
  public async signIn(@Body() body, @Res() res: Response, @Next() next): Promise<any> {
    return this.authService.signIn(body).then((reponse) => {
      const date = new Date();

      res.cookie('montepoeliJwt', reponse.jwt, {
        expires: new Date(date.setFullYear(date.getFullYear() + 1)),
        httpOnly: true,
        signed: true,
        domain: this.domain,
        secure: this.secure,
        sameSite: 'strict',
      });

      res.cookie('montepoeliAuthenticated', true, {
        expires: new Date(date.setFullYear(date.getFullYear() + 1)),
        signed: true,
        domain: this.domain,
        secure: false,
        sameSite: 'strict',
      });

      res.send();
    });
  }

  @Post('/logout')
  public async logout(@Res() res: Response): Promise<any> {
    res.clearCookie('montepoeliJwt', { domain: this.domain });
    res.clearCookie('montepoeliAuthenticated', { domain: this.domain });

    res.send();
  }

  // TODO: find a remove way to create users
  // @Post('/createUser')
  // @UseGuards(AuthGuard())
  public createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const username = createUserDto.username;
    const password = createUserDto.password;

    if (!username && !password) {
      throw new BadRequestException('username and password should be defined');
    }

    return this.usersService.create(createUserDto);
  }
}

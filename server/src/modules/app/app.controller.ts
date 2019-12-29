import {BadRequestException, Body, Controller, Next, Post, Res, UseGuards} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {User} from '../../models/interfaces/user.interface';
import {AuthService} from '../auth/auth.service';
import {Response} from 'express';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService,
              private readonly authService: AuthService) {
  }

  private secure: boolean = process.env.ENV === 'prod';

  @Post('/signIn')
  public async signIn(@Body() body, @Res() res: Response, @Next() next): Promise<any> {
    return await this.authService.signIn(body).then(jwt => {
      const date = new Date();
      res.cookie('montepoeliJwt',
      jwt.jwt,
      {
        expires: new Date(date.setFullYear(date.getFullYear() + 1)),
        httpOnly: true,
        secure: this.secure,
        sameSite: 'None' // Should be 'Strict' on production
      });

      res.cookie(
        'montepoeliAuthenticated',
        true,
        {
          expires: new Date(date.setFullYear(date.getFullYear() + 1)),
          secure: this.secure,
          sameSite: 'none'
        }
      );

      res.send();
    });
  }

  @Post('/logout')
  public async logout(@Res() res: Response): Promise<any> {
    res.clearCookie('montepoeliJwt');

    res.send();
  }

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

import {BadRequestException, Body, Controller, Next, Post, Res} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {User} from '../../models/interfaces/user.interface';
import {AuthService} from '../auth/auth.service';
import {Response} from 'express';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService,
              private readonly authService: AuthService) {
  }
  @Post('/signIn')
  public async signIn(@Body() body, @Res() res: Response, @Next() next): Promise<any> {
    return await this.authService.signIn(body).then(jwt => {
      const date = new Date();
      res.cookie('montepoeliJwt',
      jwt.jwt,
      {
        expires: new Date(date.setFullYear(date.getFullYear() + 1)),
        // httpOnly: true, TODO: make httpOnly true work
        secure: true,
        sameSite: 'None' // Should be 'Strict' on production
      });

      // This secure true makes the application give a 401.
      // I think because you need ssl certificates to make this work.
      // On production it would probably work.
      // Maybe good to add ssl ceriticates anyway to have it more 1 on 1 with production
      res.send({montepoeliJwt: jwt.jwt});
    });
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

import {BadRequestException, Body, Controller, Get, Next, Post, Res, UseGuards} from '@nestjs/common';
import {AppService} from './app.service';
import {UsersService} from '../users/users.service';
import {User} from '../models/interfaces/user.interface';
import {AuthService} from '../auth/auth.service';
import {Response} from 'express';
import {CreateUserDto} from '../models/create-dtos/create-user.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly usersService: UsersService,
              private readonly authService: AuthService) {
  }

  @Get()
  public getHello(): Promise<User> {
    // return this.usersService.create({username: 'user', password: '123'});
    return null;
  }

  @Post('/signIn')
  public async signIn(@Body() body, @Res() res: Response, @Next() next): Promise<any> {
    return await this.authService.signIn(body).then(jwt => {
      res.cookie('jwt', jwt.jwt);
      res.send({jwt: jwt.jwt});
    });
  }

  @Post('/createUser')
  @UseGuards(AuthGuard())
  public createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const username = createUserDto.username;
    const password = createUserDto.password;

    if (!username && !password) {
      throw new BadRequestException('username and password should be defined');
    }

    return this.usersService.create(createUserDto);
  }
}

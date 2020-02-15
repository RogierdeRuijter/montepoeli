import {BadRequestException, Body, Controller, Get, UseGuards, Post, Res, Req} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from '../../models/interfaces/user.interface';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';
import {AuthGuard} from '@nestjs/passport';
import { Request } from 'express';
import { UserDto } from 'src/models/dtos/user.dto';

@Controller('/users')
@UseGuards(AuthGuard())
export class UsersController {

  private domain: string = process.env.ENV.toString() === 'prod' ? process.env.DOMAIN : undefined;

  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  public async getUsers(): Promise<any> {
    return this.usersService.getAllUsers();
  }

  // @Post('/create')
  public createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const username = createUserDto.username;
    const password = createUserDto.password;

    if (!username && !password) {
      throw new BadRequestException('username and password should be defined');
    }

    return this.usersService.create(createUserDto);
  }

  @Post('/language-preference')
  public async setLanguagePreference(@Body() body: any): Promise<any> {
    const username: string = body.username;
    const languagePreference: string = body.languagePreference;

    if (!username || !languagePreference) {
      throw new BadRequestException('username or languagePreference is not defined');
    }

    if (languagePreference !== 'dutch' && languagePreference !== 'english') {
      throw new BadRequestException('language preference should be dutch or english');
    }

    return this.usersService.setLanguagePreference(username, languagePreference);
  }

  @Get('/current')
  public async getCurrentUser(@Req() req: Request): Promise<UserDto> {
    const jwt = req?.signedCookies?.montepoeliJwt;

    return this.usersService.getUserWithJwt(jwt);
  }
}

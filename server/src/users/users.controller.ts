import {BadRequestException, Body, Controller, Get, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from '../models/interfaces/user.interface';
import {CreateUserDto} from '../models/create-dtos/create-user.dto';
import {AuthGuard} from '@nestjs/passport';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  public async getUsers(): Promise<any> {
    return this.usersService.getAllUsers();
  }

  // @Post('/create')
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

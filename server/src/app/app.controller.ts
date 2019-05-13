import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {UsersService} from '../users/users.service';
import {User} from '../interfaces/user.interface';
import {AuthService} from '../auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly usersService: UsersService,
              private readonly authService: AuthService) {
  }

  @Get()
  public getHello(): Promise<User> {
    // return this.usersService.create({email: 'user@email.com', password: 'edf23dfe'});
    return null;
  }

  @Get('/signIn')
  public signIn(): Promise<string> {
    // return this.authService.signIn();
    return null;
  }
}

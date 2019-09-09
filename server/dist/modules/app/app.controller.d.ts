import {UsersService} from '../users/users.service';
import {User} from '../../models/interfaces/user.interface';
import {AuthService} from '../auth/auth.service';
import {Response} from 'express';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';

export declare class AppController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    signIn(body: any, res: Response, next: any): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}

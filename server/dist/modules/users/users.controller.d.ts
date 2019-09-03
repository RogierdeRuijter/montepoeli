import {UsersService} from './users.service';
import {User} from '../../models/interfaces/user.interface';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';

export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}

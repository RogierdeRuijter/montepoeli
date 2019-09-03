import {User} from '../../models/interfaces/user.interface';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';
import {JwtPayload} from '../../models/interfaces/jwt-payload.interface';
import {UserDto} from '../../models/dtos/user.dto';
import {UserMapper} from './user.mapper';
import {UserRepositoryService} from './user-repository/user-repository.service';
import {UtilService} from '../shared/services/util/util.service';

export declare class UsersService {
    private readonly userRepositoryService;
    private readonly userMapper;
    private readonly utilService;
    constructor(userRepositoryService: UserRepositoryService, userMapper: UserMapper, utilService: UtilService);
    findByUsername(payload: JwtPayload): Promise<User>;
    verifyUser(payload: any): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<UserDto[]>;
}

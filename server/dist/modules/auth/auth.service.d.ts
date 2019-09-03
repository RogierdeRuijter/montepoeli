import {JwtService} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';
import {JwtPayload} from '../../models/interfaces/jwt-payload.interface';

export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private jwtOptions;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(body: any): Promise<any>;
    validateUser(payload: JwtPayload): Promise<any>;
}

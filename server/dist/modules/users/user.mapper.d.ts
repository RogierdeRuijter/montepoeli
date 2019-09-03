import {Model} from 'mongoose';
import {User} from '../../models/interfaces/user.interface';
import {Mapper} from '../../models/interfaces/mapper.interface';
import {UserDto} from '../../models/dtos/user.dto';

export declare class UserMapper implements Mapper<UserDto> {
    private readonly userModel;
    constructor(userModel: Model<User>);
    convertUsers(users: User[]): UserDto[];
    convert(user: User): UserDto;
}

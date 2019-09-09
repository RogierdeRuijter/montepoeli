import {User} from '../../../models/interfaces/user.interface';
import {Model} from 'mongoose';

export declare class UserRepositoryService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    find(): Promise<User[]>;
    findByUsername(username: string): Promise<User>;
    save(user: User): Promise<User>;
}

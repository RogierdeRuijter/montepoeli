import {Factory} from './factory';
import {User} from '../models/interfaces/user.interface';

export declare class UserFactory implements Factory<User> {
    private factoryUtilService;
    create(id?: string): User;
    createMany(amount: number): User[];
}

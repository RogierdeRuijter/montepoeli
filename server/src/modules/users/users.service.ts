import {Model} from 'mongoose';
import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {User} from '../../models/interfaces/user.interface';
import {InjectModel} from '@nestjs/mongoose';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';
import {JwtPayload} from '../../models/interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import {UserDto} from '../../models/dtos/user.dto';
import {UserMapper} from './user.mapper';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>,
              private readonly userMapper: UserMapper) {
  }

  public findByUsername(payload: JwtPayload): Promise<User> {
    return this.userModel.find({username: payload.username}).exec();
  }

  public verifyUser(payload): Promise<User> {
    return new Promise((resolve, reject) => this.userModel.find({username: payload.username}).exec().then((users) => {
      if (users.length === 0) {
        reject('user not found');
        return;
      }

      if (users.length > 1) {
        reject(new InternalServerErrorException('more than 1 user with the same username'));
        return;
      }

      const user = users[0];

      bcrypt.compare(payload.password, user.password, (err, res) => {
        if (res === true) {
          resolve(user);
        } else if (res === false) {
          reject('hash comparison failed');
        }
      });
    }));
  }

  public create(createUserDto: CreateUserDto): Promise<User> {
    return new Promise((resolve) => bcrypt.hash(createUserDto.password, 10, (err, passwordHash) => {
      createUserDto.password = passwordHash;
      const createdUser = new this.userModel(createUserDto);
      resolve(createdUser.save());
    }));
  }

  public getAllUsers(): Promise<UserDto[]> {
    return new Promise<UserDto[]>(resolve => {
      this.userModel.find().exec().then((users: User[]) =>
        resolve(this.userMapper.convertUsers(users)));
    });
  }
}

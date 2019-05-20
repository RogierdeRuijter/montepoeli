import {Model} from 'mongoose';
import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {User} from '../interfaces/user.interface';
import {InjectModel} from '@nestjs/mongoose';
import {CreateUserDto} from '../dtos/create-user.dto';
import {JwtPayload} from '../interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  getHello(): string {
    return 'Hello World 1!';
  }

  findOneByToken(token: string): Promise<any> {
    return new Promise(() => false);
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
}

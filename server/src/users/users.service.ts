import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {User} from '../interfaces/user.interface';
import {InjectModel} from '@nestjs/mongoose';
import {CreateUserDto} from '../dtos/create-user.dto';

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

  findOneByEmail(email: string): Promise<User> {
    return this.userModel.find({email}).exec();
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}

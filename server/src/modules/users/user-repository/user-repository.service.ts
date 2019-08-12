import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {User} from '../../../models/interfaces/user.interface';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class UserRepositoryService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  public find(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  public async findByUsername(username: string): Promise<User> {
    const users = await this.userModel.find({username}).exec();

    if (users.length > 1) {
      throw new InternalServerErrorException('more than 1 user with the same username');
    }

    return users[0];
  }

  public save(user: User): Promise<User> {
    return new this.userModel(user).save();
  }
}

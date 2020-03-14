import {Injectable} from '@nestjs/common';
import {User} from '../../models/interfaces/user.interface';
import {Mapper} from '../../models/interfaces/mapper.interface';
import {UserDto} from '../../models/dtos/user.dto';

@Injectable()
export class UserMapper implements Mapper<UserDto> {

  public convertUsers(users: User[]): UserDto[] {
    return users.map((user: User) => this.convert(user));
  }

  public convert(user: User): UserDto {
    return {
      name: user.name,
    };
  }
}

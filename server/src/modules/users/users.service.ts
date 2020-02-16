import {Injectable, Logger, Res} from '@nestjs/common';
import {User} from '../../models/interfaces/user.interface';
import {CreateUserDto} from '../../models/create-dtos/create-user.dto';
import {JwtPayload} from '../../models/interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import {UserDto} from '../../models/dtos/user.dto';
import {UserMapper} from './user.mapper';
import {UserRepositoryService} from './user-repository/user-repository.service';
import {UtilService} from '../shared/services/util/util.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepositoryService: UserRepositoryService,
              private readonly userMapper: UserMapper,
              private readonly utilService: UtilService,
              private readonly jwtService: JwtService) {
  }
  private logger = new Logger('UsersService');

  public findByUsername(payload: JwtPayload): Promise<User> {
    return this.userRepositoryService.findByUsername(payload.username);
  }

  public verifyUser(payload): Promise<User> {
    return new Promise((resolve, reject) => this.userRepositoryService.findByUsername(payload.username).then((user: User) => {
      if (this.utilService.isNullOrUndefined(user)) {
        reject('user not found');
        return;
      }

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
      // @ts-ignore
      // FIXME: convert dto
      resolve(this.userRepositoryService.save(createUserDto));
    }));
  }

  public getAllUsers(): Promise<UserDto[]> {
    return new Promise<UserDto[]>(resolve => {
      this.userRepositoryService.find().then((users: User[]) =>
        resolve(this.userMapper.convertUsers(users)));
    });
  }

  // TODO: write unit test
  public setLanguagePreference(username: string, languagePreferance: string): Promise<User> {
      return this.userRepositoryService.updateLanguagePreferance(username, languagePreferance);
  }

  public async getUserWithJwt(jwt: string): Promise<UserDto> {
    // @ts-ignore
    const username: string = this.jwtService.decode(jwt).username;

    const user = await this.userRepositoryService.findByUsername(username);

    return this.userMapper.convert(user);
  }
}

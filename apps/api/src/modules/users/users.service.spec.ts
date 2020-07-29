import {Test, TestingModule} from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserRepositoryService } from './user-repository/user-repository.service';
import { UserMapper } from './user.mapper';
import { UtilService } from '../shared/services/util/util.service';
import { JwtService } from '@nestjs/jwt';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UserRepositoryService, useValue: '12'},
        UserMapper,
        UtilService,
        { provide: JwtService, useValue: '12' }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

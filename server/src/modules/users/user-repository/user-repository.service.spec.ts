import {Test, TestingModule} from '@nestjs/testing';
import {UserRepositoryService} from './user-repository.service';
import {getModelToken} from '@nestjs/mongoose';

describe('UserRepositoryService', () => {
  let service: UserRepositoryService;

  const factory = () => {
    const find = '';
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepositoryService,
        {provide: getModelToken('User'), useFactory: factory},
      ],
    }).compile();

    service = module.get<UserRepositoryService>(UserRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

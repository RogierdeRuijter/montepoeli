import { Test, TestingModule } from '@nestjs/testing';
import { RefreshTokenRepositoryService } from './refresh-token-repository.service';
import { getModelToken } from '@nestjs/mongoose';
import { RefreshToken } from '../refresh-token.model';
import { User } from 'apps/api/src/models/interfaces/user.interface';
import { UserFactory } from 'apps/api/src/factories/user.factory';

describe('RefreshTokenRepositoryService', () => {
  let service: RefreshTokenRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RefreshTokenRepositoryService,
        {
          provide: getModelToken(RefreshToken.name),
          useValue: '',
        },
      ],
    }).compile();

    service = module.get<RefreshTokenRepositoryService>(RefreshTokenRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe(RefreshTokenRepositoryService.prototype.createRefreshToken.name, () => {
    it('The save method should be called', () => {
      const userFactory = new UserFactory();
      const user: User = userFactory.create();
      const spy = spyOn(RefreshTokenRepositoryService.prototype, 'createToken');

      service.createRefreshToken(user, 1200);

      expect(spy).toBeCalled();
    });
  });
});

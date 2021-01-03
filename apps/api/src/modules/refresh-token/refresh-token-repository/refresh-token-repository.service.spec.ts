import { Test, TestingModule } from '@nestjs/testing';
import { RefreshTokenRepositoryService } from './refresh-token-repository.service';
import { getModelToken } from '@nestjs/mongoose';
import { RefreshToken } from '../refresh-token.model';

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
});

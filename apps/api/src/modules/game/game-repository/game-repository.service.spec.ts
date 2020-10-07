import { Test, TestingModule } from '@nestjs/testing';
import { GameRepositoryService } from './game-repository.service';
import { getModelToken } from '@nestjs/mongoose';

describe('GameRepositoryService', () => {
  let service: GameRepositoryService;

  const factory = () => {
    const find = '';
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GameRepositoryService,
        { provide: getModelToken('Game'), useFactory: factory },
      ],
    }).compile();

    service = module.get<GameRepositoryService>(GameRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RuleRepositoryService } from './rule-repository.service';
import { getModelToken } from '@nestjs/mongoose';

describe('RuleRepositoryService', () => {
  let service: RuleRepositoryService;

  const factory = () => {
    const find = '';
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RuleRepositoryService,
        { provide: getModelToken('Rule'), useFactory: factory },
      ],
    }).compile();

    service = module.get<RuleRepositoryService>(RuleRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

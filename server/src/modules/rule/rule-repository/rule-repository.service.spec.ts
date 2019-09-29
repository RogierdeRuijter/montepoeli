import {Test, TestingModule} from '@nestjs/testing';
import {RuleRepositoryService} from './rule-repository.service';

describe('RuleRepositoryService', () => {
  let service: RuleRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuleRepositoryService],
    }).compile();

    service = module.get<RuleRepositoryService>(RuleRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

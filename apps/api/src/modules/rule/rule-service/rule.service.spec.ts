import { Test, TestingModule } from '@nestjs/testing';
import { RuleService } from './rule.service';
import { RuleRepositoryService } from '../rule-repository/rule-repository.service';
import { RuleMapperService } from '../rule-mapper/rule-mapper.service';
import { SortService } from '../../shared/services/sort/sort.service';

describe('RuleService', () => {
  let service: RuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RuleService,
        { provide: RuleRepositoryService, useValue: {} },
        { provide: RuleMapperService, useValue: {} },
        SortService,
      ],
    }).compile();

    service = module.get<RuleService>(RuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

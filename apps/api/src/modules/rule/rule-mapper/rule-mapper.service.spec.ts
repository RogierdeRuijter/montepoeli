import {Test, TestingModule} from '@nestjs/testing';
import {RuleMapperService} from './rule-mapper.service';

describe('RuleMapperService', () => {
  let service: RuleMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuleMapperService],
    }).compile();

    service = module.get<RuleMapperService>(RuleMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

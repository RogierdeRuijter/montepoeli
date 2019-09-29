import {Injectable} from '@nestjs/common';
import {RuleDto} from '../../../models/dtos/rule.dto';
import {CreateRuleDto} from '../../../models/create-dtos/create-rule.dto';
import {RuleRepositoryService} from '../rule-repository/rule-repository.service';
import {Rule} from '../../../models/interfaces/rule.interface';
import {RuleMapperService} from '../rule-mapper/rule-mapper.service';

@Injectable()
export class RuleService {
  constructor(private ruleRepositoryService: RuleRepositoryService,
              private ruleMapperService: RuleMapperService) {
  }

  public async getAll(): Promise<RuleDto[]> {
    const rules: Rule[] = await this.ruleRepositoryService.find();

    return rules.map((rule: Rule) => this.ruleMapperService.convert(rule));
  }

  public async create(createRuleDto: CreateRuleDto): Promise<RuleDto> {
    const newRule: Rule = {
      description: createRuleDto.description,
      date: new Date(Date.now())
    };

    const rule = await this.ruleRepositoryService.save(newRule);

    return this.ruleMapperService.convert(rule);
  }
}

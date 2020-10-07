import { Injectable } from '@nestjs/common';
import { Mapper } from '../../../models/interfaces/mapper.interface';
import { RuleDto } from '../../../models/dtos/rule.dto';
import { Rule } from '../../../models/interfaces/rule.interface';

@Injectable()
export class RuleMapperService implements Mapper<RuleDto> {
  public convert(rule: Rule): RuleDto {
    return {
      description: rule.description,
    };
  }
}

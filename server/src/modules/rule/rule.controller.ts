import {Body, Controller, Get, Post} from '@nestjs/common';
import {RuleService} from './rule-service/rule.service';
import {RuleDto} from '../../models/dtos/rule.dto';
import {CreateRuleDto} from '../../models/create-dtos/create-rule.dto';

@Controller('/rule')
export class RuleController {
  constructor(private ruleService: RuleService) {}

  @Get()
  // @UseGuards(AuthGuard())
  public getAll(): Promise<RuleDto[]> {
    return this.ruleService.getAll();
  }

  @Post('/create')
  // @UseGuards(AuthGuard())
  public async create(@Body() body: CreateRuleDto): Promise<RuleDto> {
    return this.ruleService.create(body);
  }
}

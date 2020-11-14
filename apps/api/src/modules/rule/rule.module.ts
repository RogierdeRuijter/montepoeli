import { Module } from '@nestjs/common';
import { RuleController } from './rule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { RuleService } from './rule-service/rule.service';
import { RULE_SCHEMA } from '../../schemas/rule.schema';
import { RuleRepositoryService } from './rule-repository/rule-repository.service';
import { RuleMapperService } from './rule-mapper/rule-mapper.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Rule', schema: RULE_SCHEMA }]), AuthModule, SharedModule],
  providers: [RuleService, RuleRepositoryService, RuleMapperService],
  controllers: [RuleController],
  exports: [],
})
export class RuleModule {}

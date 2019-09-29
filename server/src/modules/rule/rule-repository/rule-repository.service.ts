import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Rule} from '../../../models/interfaces/rule.interface';

@Injectable()
export class RuleRepositoryService {
  constructor(@InjectModel('Rule') private readonly ruleModel: Model<Rule>) {
  }

  public find(): Promise<Rule[]> {
    return this.ruleModel.find().exec();
  }

  public save(rule: Rule): Promise<Rule> {
    return new this.ruleModel(rule).save();
  }
}

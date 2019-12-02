import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Rule} from '../../shared/interfaces/rule.interface';
import {RuleService} from '../modules/rule/services/rule.service';

@Injectable({
    providedIn: 'root'
})
export class RuleResolver implements Resolve<Observable<Rule[]>> {
  constructor(private ruleService: RuleService) {}

  public resolve(): Observable<Rule[]> {
    return this.ruleService.getAll();
  }
}

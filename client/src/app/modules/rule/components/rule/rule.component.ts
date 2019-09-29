import {Component, OnInit} from '@angular/core';
import {RuleService} from '../../services/rule.service';
import {Rule} from '../../../shared/interfaces/rule.interface';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  public rules: Rule[];

  constructor(private ruleService: RuleService) { }

  public ngOnInit(): void {
    this.ruleService
      .getAll()
      .subscribe((rules: Rule[]) => this.rules = rules);
  }

}

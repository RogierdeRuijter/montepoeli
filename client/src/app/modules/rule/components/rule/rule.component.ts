import {Component, OnInit} from '@angular/core';
import {RuleService} from '../../services/rule.service';
import {Rule} from '../../../shared/interfaces/rule.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {

  public rules$: Observable<Rule[]>;

  constructor(private ruleService: RuleService) { }

  public ngOnInit(): void {
    this.rules$ = this.ruleService.getAll();
  }

}

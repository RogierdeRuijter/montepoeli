import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../shared/interfaces/rule.interface';
import {RuleService} from '../../services/rule.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuleComponent implements OnInit {

  public rules$: Observable<Rule[]>;

  constructor(private ruleService: RuleService) {}

  public ngOnInit(): void {
    this.rules$ = this.ruleService.getAll();
  }
}

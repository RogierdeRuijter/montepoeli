import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../../../shared/interfaces/rule.interface';
import {RuleService} from '../../services/rule.service';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuleComponent implements OnInit {

  public rules: Rule[];

  constructor(private activatedRoute: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.activatedRoute.parent.data.subscribe(data => this.setRulesInComponent(data.rules));
  }

  public setRulesInComponent(rules: Rule[]): void {
    this.rules = rules;
    this.changeDetectorRef.detectChanges();
  }
}

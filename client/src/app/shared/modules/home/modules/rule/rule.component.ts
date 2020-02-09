import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { Rule } from '../../../../../shared/interfaces/rule.interface';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuleComponent {

  @Input()
  public rules: Rule[];
}

/* tslint:disable */
@NgModule({
  declarations: [
    RuleComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class InternalRuleComponentModule { }

import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Rule} from '../../../shared/interfaces/rule.interface';

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

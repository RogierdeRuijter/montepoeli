import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { Icons, IconSize } from '../../../../../../../shared/static-files/enums';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-simple-title-bar',
  templateUrl: './simple-title-bar.component.html',
  styleUrls: ['./simple-title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', animate('300ms', style({ opacity: 1 })), {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class SimpleTitleBarComponent {
  @Output()
  public iconClicked: EventEmitter<void> = new EventEmitter();

  public icon = Icons.montepoeli;
  public iconSize = IconSize.small;

  public handleButtonClicked(): void {
    this.iconClicked.emit();
  }
}

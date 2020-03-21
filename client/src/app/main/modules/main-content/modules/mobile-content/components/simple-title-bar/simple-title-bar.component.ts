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
    query(':enter', style({ opacity: 0 })),
    query(':enter', animate('600ms', style({ opacity: 1 })))
    ])
  ])
  ]
})

export class SimpleTitleBarComponent {
  @Output()
  public iconClicked: EventEmitter<void> = new EventEmitter();

  public Icons = Icons;
  public IconSize = IconSize;

  public handleButtonClicked(): void {
    this.iconClicked.emit();
  }
}

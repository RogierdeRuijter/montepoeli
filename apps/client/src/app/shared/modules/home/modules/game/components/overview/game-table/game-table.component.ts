import { Component, Input } from '@angular/core';
import { Game } from '../../../../../../../../shared/interfaces/game.interface';
import { Observable } from 'rxjs';
import { trigger, transition, query, style, animate } from '@angular/animations';

@Component({
  selector: 'ui-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
  animations: [
    trigger('rowAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', animate('600ms', style({ opacity: 1 })), {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class GameTableComponent {
  @Input()
  public games$: Observable<Game[]>;

  @Input()
  public displayedColumns: string[];
}

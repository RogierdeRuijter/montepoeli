import {Component, Input} from '@angular/core';
import {Game} from '../../../../../../../shared/interfaces/game.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'ui-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent {

  @Input()
  public games$: Observable<Game[]>;

  @Input()
  public displayedColumns: string[];
}

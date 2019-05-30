import {Component, Input} from '@angular/core';
import {Game} from '../../../interfaces/game.interface';

@Component({
  selector: 'ui-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent {

  @Input()
  public games: Game[];

  public displayedColumns: string[] = ['white', 'winner', 'black'];

  constructor() {
  }
}

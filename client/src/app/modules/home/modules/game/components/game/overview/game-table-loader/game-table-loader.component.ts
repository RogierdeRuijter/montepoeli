import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-table-loader',
  templateUrl: './game-table-loader.component.html',
  styleUrls: ['./game-table-loader.component.scss'],
})
export class GameTableLoaderComponent {

  @Input()
  public games: any[];

  @Input()
  public amountOfRows: number;

  @Input()
  public displayedColumns: string[];
}
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-table-loader',
  templateUrl: './game-table-loader.component.html',
  styleUrls: ['./game-table-loader.component.scss'],
})
export class GameTableLoaderComponent implements OnInit {

  @Input()
  public games: any[];

  @Input()
  public amountOfRows: number;

  @Input()
  public displayedColumns: string[];

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogDataComponent} from '../dialog-data/dialog-data.component';
import {Game} from '../../../interfaces/game.interface';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
})
export class DialogOverviewComponent {

  @Output()
  public addEvent: EventEmitter<Game> = new EventEmitter();

  // TODO: use factory
  public game: Game = {
    white: null,
    winner: null,
    black: null,
  };

  constructor(public dialog: MatDialog) {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      width: '800px',
      data: {
        white: this.game.white,
        winner: this.game.winner,
        black: this.game.black,
      } as Game,
    });

    dialogRef.afterClosed().subscribe((result: Game) => {
      console.log('The dialog was closed');
      this.addEvent.emit(result);
    });
  }

}

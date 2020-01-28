import {Component, EventEmitter, Output} from '@angular/core';
import {DialogDataComponent} from '../dialog-data/dialog-data.component';
import {Game} from '../../../../interfaces/game.interface';
import {GameFactory} from '../../../../../modules/home/modules/game/factories/game.factory';
import {UtilService} from '../../../../services/util/util.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview',
  template: ``,
})
export class DialogOverviewComponent {

  @Output()
  public addEvent: EventEmitter<Game> = new EventEmitter();

  @Output()
  public cancelEvent: EventEmitter<Game> = new EventEmitter();

  public game: Game = new GameFactory().create();

  constructor(public dialog: MatDialog,
              private utilService: UtilService) {
  }

  public openDialog(): void {
    this.dialog.closeAll();
    
    const dialogRef = this.dialog.open(DialogDataComponent, {
      data: {
        white: this.game.white,
        winner: this.game.winner,
        black: this.game.black,
      } as Game,
      closeOnNavigation: true,
    });

    dialogRef.afterClosed().subscribe((result: Game | string) => {
      if (this.addEventIsReceived(result)) {
        this.addEvent.emit(result as Game);
      }

      if (result === 'cancelButton') {
        this.cancelEvent.emit();
      }
    });
  }

  private addEventIsReceived(result: any): boolean {
    return !this.utilService.isNullOrUndefined(result.white);
  }
}

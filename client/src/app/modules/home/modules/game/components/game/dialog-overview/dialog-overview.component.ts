import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogDataComponent} from '../dialog-data/dialog-data.component';
import {Game} from '../../../../../../shared/interfaces/game.interface';
import {GameFactory} from '../../../factories/game.factory';
import {UtilService} from '../../../../../../shared/services/util/util.service';
import {BlurStore} from '../../../../../../shared/stores/blur.store';

@Component({
  selector: 'app-dialog-overview',
  template: ``,
})
export class DialogOverviewComponent {

  @Output()
  public addEvent: EventEmitter<Game> = new EventEmitter();

  public game: Game = new GameFactory().create();

  constructor(public dialog: MatDialog,
              private utilService: UtilService,
              private blurStore: BlurStore) {
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

    dialogRef.afterClosed().subscribe((game: Game) => {
      this.blurStore.set(false);
      if (this.addEventIsReceived(game)) {
        this.addEvent.emit(game);
      }
    });
  }

  private addEventIsReceived(game: Game): boolean {
    return !this.utilService.isNullOrUndefined(game);
  }
}

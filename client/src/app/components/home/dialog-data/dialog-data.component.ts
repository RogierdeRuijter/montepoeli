import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../interfaces/user.interface';
import {Winners} from '../../../static-files/enums';
import {Game} from '../../../interfaces/game.interface';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss'],
})
export class DialogDataComponent {

  // TODO: get users with a store solution
  public users: User[] = [{name: 'Rogier'}, {name: 'Jeroen'}];

  // TODO: save winners somehwere else
  public winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game) {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}

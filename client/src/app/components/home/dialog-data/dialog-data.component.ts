import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../interfaces/user.interface';
import {ButtonFunction, ButtonType, Winners} from '../../../static-files/enums';
import {Game} from '../../../interfaces/game.interface';
import {UserStore} from '../../../stores/user.store';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss'],
})
export class DialogDataComponent implements OnInit {

  public users: User[];
  public winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

  public ButtonType = ButtonType;
  public ButtonFunction = ButtonFunction;

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game,
    private userStore: UserStore) {
  }

  public ngOnInit(): void {
    this.userStore.get().subscribe((users: User[]) => this.users = users);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}

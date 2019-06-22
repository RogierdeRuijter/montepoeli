import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Alignments, ButtonFunction, ButtonType, GridSizes, Winners} from '../../../../shared/static-files/enums';
import {Game} from '../../../../shared/interfaces/game.interface';
import {UserStore} from '../../../stores/user.store';
import {DialogDataService} from '../../../services/dialog-data.service';
import {User} from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
})
export class DialogDataComponent implements OnInit {

  public users: User[];
  public winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

  public ButtonType = ButtonType;
  public ButtonFunction = ButtonFunction;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game,
    private userStore: UserStore,
    private dialogDataService: DialogDataService) {
  }

  public ngOnInit(): void {
    this.userStore.get().subscribe((users: User[]) => this.users = users);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public determineAvailableUsersForSelect(selectName: string): User[] {
    return this.dialogDataService.determineAvailableUsersForSelect(this.users, this.data, selectName);
  }

  public ifAllFieldsAreNotField(): boolean {
    return !this.dialogDataService.allFieldsAreDefined(this.data);
  }
}

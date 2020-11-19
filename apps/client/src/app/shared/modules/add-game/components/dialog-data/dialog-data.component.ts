import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Game } from '../../../../interfaces/game.interface';
import { AsyncBaseComponent } from '../../../async/components/async-base-component/async-base.component';
import { ButtonFunction, ButtonType, GridSizes, Winners } from '../../../../static-files/enums';
import { DialogDataService } from '../../services/dialog-data/dialog-data.service';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
})
export class DialogDataComponent extends AsyncBaseComponent implements OnDestroy {
  public buttonType = ButtonType;
  public buttonFunction = ButtonFunction;
  public gridSizes = GridSizes;

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public game: Game,
    private dialogDataService: DialogDataService
  ) {
    super();
  }

  public cancelEventHandler(): void {
    this.dialogRef.close('cancelButton');
  }

  public ifAllFieldsAreNotField(): boolean {
    return !this.dialogDataService.allFieldsAreDefined(this.game);
  }
}

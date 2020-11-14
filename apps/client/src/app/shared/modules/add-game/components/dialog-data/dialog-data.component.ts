import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sides, Winners } from '../../../../static-files/enums';
import { Game } from '../../../../interfaces/game.interface';
import { DialogDataService } from '../../services/dialog-data/dialog-data.service';
import { User } from '../../../../interfaces/user.interface';
import { TranslateService } from '@ngx-translate/core';
import { AsyncBaseComponent } from '../../../async/components/async-base-component/async-base.component';
import { UsersStore } from '../../../home/modules/game/stores/user.store';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
})
export class DialogDataComponent extends AsyncBaseComponent implements OnInit, OnDestroy {
  public users: User[];
  public winners: Winners[] = [Winners.white, Winners.black, Winners.draw];

  public Sides = Sides;

  public winnerOptions: string[] = [];

  public winnersDeselected: boolean;
  public blackDeselected: boolean;

  public draw: string;

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game,
    private userStore: UsersStore,
    private dialogDataService: DialogDataService,
    private translateService: TranslateService
  ) {
    super();
  }

  public ngOnInit(): void {
    combineLatest([
      this.userStore.get(this.destroy$),
      this.translateService.stream('pages.home.games.labels.' + Winners.draw),
    ]).subscribe(([users, draw]: [User[], string]) => {
      this.users = users;
      this.draw = draw;

      this.determineWinnerOptions(this.users);
    });
  }

  public cancelEventHandler(): void {
    this.dialogRef.close('cancelButton');
  }

  public ifAllFieldsAreNotField(): boolean {
    return !this.dialogDataService.allFieldsAreDefined(this.data);
  }

  public usersAreNotDefined(): boolean {
    return !this.dialogDataService.userAreDefined(this.data);
  }

  public fieldUpdateHandler(event: { name: string; value: string }): void {
    this.updateGame(event);
  }

  private updateGame(event: { name: string; value: string }): void {
    // Needed to have a pointer change for the input
    this.winnersDeselected = undefined;
    this.blackDeselected = undefined;

    this.data[event.name] = event.value;

    if (event.name === 'white' && event.value === undefined) {
      this.data.black = undefined;
      this.blackDeselected = false;
    }

    if (event.value === undefined) {
      this.data.winner = undefined;
      this.winnersDeselected = false;
    }
  }

  public determineDisabledWinnerOptions(): boolean[] {
    return this.dialogDataService.determineDisabledWinnerOptions(this.winnerOptions, this.data, this.draw);
  }

  public areAllWinnerOptionsDisabled(): boolean {
    return this.dialogDataService.areAllWinnerOptionsDisabled(this.winnerOptions, this.data, this.draw);
  }

  private determineWinnerOptions(users: User[]): void {
    this.winnerOptions = [];

    users.forEach((user: User) => this.winnerOptions.push(user.name));
    this.winnerOptions.push(this.draw);
  }
}

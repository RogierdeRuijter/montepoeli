import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Sides, Winners} from '../../../../static-files/enums';
import {Game} from '../../../../interfaces/game.interface';
import {UserStore} from '../../../../../../modules/home/modules/game/stores/user.store';
import {DialogDataService} from '../../services/dialog-data/dialog-data.service';
import {User} from '../../../../interfaces/user.interface';
import {TranslateService} from '@ngx-translate/core';
import {AsyncBaseComponent} from '../../../async/components/async-base-component/async-base.component';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
})
export class DialogDataComponent extends AsyncBaseComponent implements OnInit, OnDestroy {

  public users: User[];
  public winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

  public Sides = Sides;

  public winnerOptions: string[] = [];

  constructor(public dialogRef: MatDialogRef<DialogDataComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Game,
              private userStore: UserStore,
              private dialogDataService: DialogDataService,
              private translateService: TranslateService) {
    super();
  }

  public ngOnInit(): void {
    this.userStore
      .get(this.destroy$)
      .subscribe((users: User[]) => this.users = users);
  }

  public cancelEventHandler(): void {
    this.dialogRef.close('cancelButton');
  }

  public determineAvailableUsersForSelect(selectName: string): User[] {
    return this.dialogDataService.determineAvailableUsersForSelect(this.users, this.data, selectName);
  }

  public ifAllFieldsAreNotField(): boolean {
    return !this.dialogDataService.allFieldsAreDefined(this.data);
  }

  public usersAreNotDefined(): boolean {
    return !this.dialogDataService.userAreDefined(this.data);
  }

  public fieldUpdateHandler(game: Partial<Game>): void {
    this.winnerOptions = [];
    
    this.winnerOptions.push(game?.black);
    this.winnerOptions.push(game?.white);

    this.winnerOptions.push(this.translateService.instant('pages.home.games.cell.winner.' + Winners.DRAW));
  }
}

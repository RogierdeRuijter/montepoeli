import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Sides, Winners} from '../../../../../../shared/static-files/enums';
import {Game} from '../../../../../../shared/interfaces/game.interface';
import {UserStore} from '../../../stores/user.store';
import {DialogDataService} from '../../../services/dialog-data.service';
import {User} from '../../../../../../shared/interfaces/user.interface';
import {TranslateService} from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
})
export class DialogDataComponent implements OnInit, OnDestroy {

  public users: User[];
  public winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

  public Sides = Sides;

  public winnerOptions: string[] = [];

  private destory$: Subject<void> = new Subject();

  constructor(
    public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game,
    private userStore: UserStore,
    private dialogDataService: DialogDataService,
    private translateService: TranslateService) {
  }

  public ngOnInit(): void {
    this.userStore
      .get(this.destory$)
      .subscribe((users: User[]) => this.users = users);

    this.winners.forEach(winner => this.winnerOptions.push(this.translateService.instant('pages.home.games.cell.winner.' + winner)));
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

  // TODO: refactor to base component that has the destory method and destory variable
  // It should be called baseAsyncComponent
  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

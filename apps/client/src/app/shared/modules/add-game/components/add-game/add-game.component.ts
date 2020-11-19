import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { DialogDataService } from '../../services/dialog-data/dialog-data.service';
import { UsersStore } from '../../../home/modules/game/stores/user.store';
import { Subject, combineLatest } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Winners } from 'src/app/shared/static-files/enums';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss'],
})
export class AddGameComponent implements OnInit, OnDestroy {
  @Input()
  public game: Game;

  @Input()
  public disabled: boolean;

  @Output()
  public cancelEvent: EventEmitter<void> = new EventEmitter();

  public winnersDeselected: boolean;
  public blackDeselected: boolean;

  public users: User[];
  public winners: Winners[] = [Winners.white, Winners.black, Winners.draw];

  public winnerOptions: string[] = [];

  public draw: string;

  public destroy$: Subject<void> = new Subject();

  constructor(
    private dialogDataService: DialogDataService,
    private userStore: UsersStore,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
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
    this.cancelEvent.emit();
  }

  public fieldUpdateHandler(event: { name: string; value: string }): void {
    this.updateGame(event);
  }

  public usersAreNotDefined(): boolean {
    return !this.dialogDataService.userAreDefined(this.game);
  }

  public determineDisabledWinnerOptions(): boolean[] {
    return this.dialogDataService.determineDisabledWinnerOptions(this.winnerOptions, this.game, this.draw);
  }

  public areAllWinnerOptionsDisabled(): boolean {
    return this.dialogDataService.areAllWinnerOptionsDisabled(this.winnerOptions, this.game, this.draw);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private updateGame(event: { name: string; value: string }): void {
    // Needed to have a pointer change for the input
    this.winnersDeselected = undefined;
    this.blackDeselected = undefined;

    this.game[event.name] = event.value;

    if (event.name === 'white' && event.value === undefined) {
      this.game.black = undefined;
      this.blackDeselected = false;
    }

    if (event.value === undefined) {
      this.game.winner = undefined;
      this.winnersDeselected = false;
    }
  }

  private determineWinnerOptions(users: User[]): void {
    this.winnerOptions = [];

    users.forEach((user: User) => this.winnerOptions.push(user.name));
    this.winnerOptions.push(this.draw);
  }
}

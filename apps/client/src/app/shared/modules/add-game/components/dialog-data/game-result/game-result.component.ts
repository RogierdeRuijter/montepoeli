import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ButtonFunction, ButtonType, GridSizes, Icons, Winners } from '../../../../../static-files/enums';
import { NgForm } from '@angular/forms';
import { Game } from '../../../../../interfaces/game.interface';
import { User } from '../../../../../interfaces/user.interface';
import { timer } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { MatChip, MatChipListChange } from '@angular/material/chips';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent {
  @ViewChild('form', { static: true })
  public form: NgForm;

  @ViewChild('whiteSelect', { static: true })
  public whiteSelect: MatSelect;

  @Input()
  public data: Game;

  @Input()
  public winners: Winners[];

  @Input()
  public disabled: boolean;

  @Input()
  public usersWhite: User[];

  @Input()
  public usersBlack: User[];

  @Input()
  public winnerOptions: string[];

  @Input()
  public winnerFieldHidden: boolean;

  @Input()
  public disabledWinnerOptions: boolean[];

  @Input()
  public winnersDeselected: boolean;

  @Input()
  public blackDeselected: boolean;

  @Input()
  public winnersDisabled: boolean;

  @Input()
  public blackDisabled: boolean;

  @Output()
  public fieldUpdateEvent: EventEmitter<{
    name: string;
    value: string;
  }> = new EventEmitter();

  @Output()
  public cancelEvent: EventEmitter<void> = new EventEmitter();

  public buttonType = ButtonType;
  public buttonFunction = ButtonFunction;
  public gridSizes = GridSizes;
  public timer = timer;

  public cancel(): void {
    this.cancelEvent.emit();
  }

  public fieldUpdated(matChip: MatChip): void {
    if (matChip.disabled === false && matChip.selectable === true) {
      matChip.toggleSelected(true);
    }
  }

  public onListChange(event: MatChipListChange, name: string): void {
    this.fieldUpdateEvent.emit({
      name,
      value: event.value,
    });
  }
}

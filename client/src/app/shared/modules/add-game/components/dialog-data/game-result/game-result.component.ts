import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ButtonFunction, ButtonType, GridSizes, Icons, Winners} from '../../../../../static-files/enums';
import {NgForm} from '@angular/forms';
import {Game} from '../../../../../interfaces/game.interface';
import {User} from '../../../../../interfaces/user.interface';
import {timer} from 'rxjs';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'ui-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent {

  @ViewChild('form', {static: true})
  public form: NgForm;

  @ViewChild('whiteSelect', {static: true})
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

  @Output()
  public cancelEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  public saveEvent: EventEmitter<void> = new EventEmitter();

  public ButtonType = ButtonType;
  public ButtonFunction = ButtonFunction;
  public GridSizes = GridSizes;
  public Icons = Icons;
  public timer = timer;

  public cancel(): void {
    this.cancelEvent.emit();
  }

  public save(): void {
    this.saveEvent.emit();
  }
}

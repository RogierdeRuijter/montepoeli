import { Component, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddGameBottomSheetComponent } from '../add-game-bottom-sheet/add-game-bottom-sheet.component';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { GameFactory } from 'src/app/shared/modules/home/modules/game/factories/game.factory';

@Component({
  selector: 'app-add-game-overview',
  templateUrl: './add-game-overview.component.html',
  styleUrls: ['./add-game-overview.component.scss'],
})
export class AddGameOverviewComponent implements OnInit {
  @Output()
  public addEvent: EventEmitter<Game> = new EventEmitter();

  @Output()
  public cancelEvent: EventEmitter<Game> = new EventEmitter();

  public game: Game;

  constructor(private bottomSheet: MatBottomSheet) {}

  public ngOnInit(): void {
    this.game = new GameFactory().create();

    this.openBottomSheet();
  }

  openBottomSheet(): void {
    this.bottomSheet.open(AddGameBottomSheetComponent, {
      data: this.game,
      closeOnNavigation: true,
    });
  }
}

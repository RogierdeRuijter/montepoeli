import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AddGameOverviewComponent } from '../add-game-overview/add-game-overview.component';
import { Game } from 'src/app/shared/interfaces/game.interface';
import { Icons } from 'src/app/shared/static-files/enums';

@Component({
  selector: 'app-add-game-bottom-sheet',
  templateUrl: './add-game-bottom-sheet.component.html',
  styleUrls: ['./add-game-bottom-sheet.component.scss'],
})
export class AddGameBottomSheetComponent {
  public icons = Icons;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddGameOverviewComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public game: Game
  ) {}
}

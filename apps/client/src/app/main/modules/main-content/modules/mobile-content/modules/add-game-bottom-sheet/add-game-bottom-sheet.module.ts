import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AddGameBottomSheetComponent } from './components/add-game-bottom-sheet/add-game-bottom-sheet.component';
import { AddGameOverviewComponent } from './components/add-game-overview/add-game-overview.component';
import { AddGameModule } from 'src/app/shared/modules/add-game/add-game.module';
import { CustomTranslateModule } from 'src/app/shared/modules/translate/custom-translate.module';
import { IconModule } from 'src/app/shared/modules/icon/icon.module';

@NgModule({
  declarations: [AddGameBottomSheetComponent, AddGameOverviewComponent],
  entryComponents: [AddGameOverviewComponent],
  imports: [CommonModule, MatBottomSheetModule, AddGameModule, CustomTranslateModule, IconModule],
})
export class AddGameBottomSheetModule {}

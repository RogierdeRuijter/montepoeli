import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { GameTableComponent } from './components/overview/game-table/game-table.component';
import { TableActionComponent } from './components/overview/table-action/table-action.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';
import { MatTableModule } from '@angular/material/table';
import { IconModule } from '../../../../../shared/modules/icon/icon.module';
import { GridModule } from '../../../../../shared/modules/grid/grid.module';
import { CustomTranslateModule } from '../../../../../shared/modules/translate/custom-translate.module';
import { CommonModule } from '@angular/common';
import { AddGameModule } from 'src/app/shared/modules/add-game/add-game.module';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    GameComponent,
    GameTableComponent,
    TableActionComponent,
    OverviewComponent
  ],
  exports: [
    GameComponent,
  ],
  imports: [
    ButtonModule,
    MatTableModule,
    IconModule,
    GridModule,
    CustomTranslateModule,
    CommonModule,
    AddGameModule,
    CdkTableModule,
  ],
})
export class GameModule {
}

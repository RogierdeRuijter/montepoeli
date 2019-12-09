import {NgModule} from '@angular/core';
import {GameComponent} from './components/game/game.component';
import {GameTableComponent} from './components/game/overview/game-table/game-table.component';
import {TableActionComponent} from './components/game/overview/table-action/table-action.component';
import {OverviewComponent} from './components/game/overview/overview.component';
import {RuleModule} from '../rule/rule.module';
import {ButtonModule} from 'src/app/shared/modules/button/button.module';
import {MatTableModule} from '@angular/material/table';
import {IconModule} from '../../../../shared/modules/icon/icon.module';
import {GridModule} from '../../../../shared/modules/grid/grid.module';
import {CustomTranslateModule} from '../../../../shared/modules/translate/custom-translate.module';
import {CommonModule} from '@angular/common';
import { AddGameModule } from 'src/app/shared/modules/add-game/add-game.module';

@NgModule({
  declarations: [
    GameComponent,
    GameTableComponent,
    TableActionComponent,
    OverviewComponent
  ],
  // providers: [
  //   {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  // ],
  // entryComponents: [
  //   DialogDataComponent,
  // ],
  exports: [
    GameComponent,
  ],
  imports: [
    ButtonModule,
    RuleModule,
    MatTableModule,
    IconModule,
    GridModule,
    CustomTranslateModule,
    CommonModule,
    AddGameModule
  ],
})
export class GameModule {
}

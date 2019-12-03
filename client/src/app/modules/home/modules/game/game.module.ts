import {NgModule} from '@angular/core';
import {GameComponent} from './components/game/game.component';
import {GameTableComponent} from './components/game/overview/game-table/game-table.component';
import {TableActionComponent} from './components/game/overview/table-action/table-action.component';
import {DialogDataComponent} from './components/game/dialog-data/dialog-data.component';
import {DialogOverviewComponent} from './components/game/dialog-overview/dialog-overview.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {OverviewComponent} from './components/game/overview/overview.component';
import {GameResultComponent} from './components/game/dialog-data/game-result/game-result.component';
import {FormModule} from '../../../../shared/modules/form/form.module';
import {RuleModule} from '../rule/rule.module';
import {ButtonModule} from 'src/app/shared/modules/button/button.module';
import {MatTableModule} from '@angular/material/table';
import {IconModule} from '../../../../shared/modules/icon/icon.module';
import {GridModule} from '../../../../shared/modules/grid/grid.module';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomTranslateModule} from '../../../../shared/modules/translate/custom-translate.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    GameComponent,
    GameTableComponent,
    TableActionComponent,
    DialogDataComponent,
    DialogOverviewComponent,
    OverviewComponent,
    GameResultComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  entryComponents: [
    DialogDataComponent,
  ],
  exports: [
    GameComponent,
  ],
  imports: [
    FormModule,
    RuleModule,
    ButtonModule,
    MatTableModule,
    IconModule,
    GridModule,
    FormsModule,
    MatDialogModule,
    CustomTranslateModule,
    CommonModule,
  ],
})
export class GameModule {
}

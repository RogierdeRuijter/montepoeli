import {NgModule} from '@angular/core';
import {GameRoutingModule} from './game-routing.module';
import {SharedModule} from '../shared/shared.module';
import {GameComponent} from './components/game/game.component';
import {GameTableComponent} from './components/game/game-table/game-table.component';
import {TableActionComponent} from './components/game/overview/table-action/table-action.component';
import {DialogDataComponent} from './components/game/dialog-data/dialog-data.component';
import {DialogOverviewComponent} from './components/game/dialog-overview/dialog-overview.component';
import {GameTableLoaderComponent} from './components/game/overview/game-table-loader/game-table-loader.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {OverviewComponent} from './components/game/overview/overview.component';

@NgModule({
  imports: [
    GameRoutingModule,
    SharedModule,
  ],
  declarations: [
    GameComponent,
    GameTableComponent,
    GameTableLoaderComponent,
    TableActionComponent,
    DialogDataComponent,
    DialogOverviewComponent,
    OverviewComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  ],
  entryComponents: [
    DialogDataComponent,
  ],
})
export class GameModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {OverviewRoutingModule} from './overview-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {GameModule} from './modules/game/game.module';
import {RuleModule} from './modules/rule/rule.module';
import {SharedModule} from '../shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatTabsModule,
    GameModule,
    RuleModule,
    SharedModule,
    MatTooltipModule,
  ],
  declarations: [
    OverviewComponent
  ]
})
export class OverviewModule { }

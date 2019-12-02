import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {GameModule} from './modules/game/game.module';
import {RuleModule} from './modules/rule/rule.module';
import {SharedModule} from '../shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    GameModule,
    RuleModule,
    SharedModule,
    MatTooltipModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }

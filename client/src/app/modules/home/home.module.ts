import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {GameModule} from '../game/game.module';
import {RuleModule} from '../rule/rule.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    GameModule,
    RuleModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }

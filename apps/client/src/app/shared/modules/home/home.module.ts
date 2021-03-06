import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { GameModule } from './modules/game/game.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MatTabsModule, GameModule, MatTooltipModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}

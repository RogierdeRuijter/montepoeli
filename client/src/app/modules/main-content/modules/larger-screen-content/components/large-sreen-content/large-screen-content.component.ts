import { Component } from '@angular/core';
import { Tabs } from '../../../../../../shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from '../../../../../../services/tab-change.global-event-emitter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargerScreenContentModule } from '../../larger-screen-content.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-large-screen-content',
  templateUrl: './large-screen-content.component.html',
  styleUrls: ['./large-screen-content.component.scss']
})
export class LargeScreenContentComponent {
  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) {
  }

  public gamesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }
}

/* tslint:disable */
@NgModule({
  declarations: [
    LargeScreenContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LargerScreenContentModule,
    HomeModule
  ]
})
class NotNeedForAName { }

/* eslint-disable */
import { Component, NgModule } from '@angular/core';
import { Tabs } from '../../../../../shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from '../../../../../shared/services/tab-change.global-event-emitter';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LargerScreenContentModule } from './larger-screen-content.module';
import { HomeModule } from '../../../../../shared/modules/home/home.module';

@Component({
  selector: 'app-large-screen-content',
  templateUrl: './large-screen-content.component.html',
  styleUrls: ['./large-screen-content.component.scss'],
})
export class LargeScreenContentComponent {
  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) {}

  public gamesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.games);
  }

  public rulesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.rules);
  }

  public iconClickedHandler(): void {
    this.gamesHandler();
  }
}

@NgModule({
  declarations: [LargeScreenContentComponent],
  imports: [CommonModule, RouterModule, LargerScreenContentModule, HomeModule],
})
export class InternalLargeScreenContentModule {}

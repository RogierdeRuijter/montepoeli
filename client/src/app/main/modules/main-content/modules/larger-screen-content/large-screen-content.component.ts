import { Component, NgModule } from '@angular/core';
import { Tabs } from '../../../../../shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from 'src/app/shared/services/tab-change.global-event-emitter';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LargerScreenContentModule } from './larger-screen-content.module';
import { HomeModule } from 'src/app/shared/modules/home/home.module';

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
export class InternalLargeScreenContentModule { }

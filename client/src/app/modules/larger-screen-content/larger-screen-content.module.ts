import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeSreenContentComponent } from './components/large-sreen-content/large-screen-content.component';
import { CustomTranslateModule } from '../shared/modules/translate/custom-translate.module';
import { MatTabsModule, MatTooltipModule, MatToolbarModule } from '@angular/material';
import { ButtonModule } from '../shared/modules/button/button.module';
import { RouterModule } from '@angular/router';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconModule } from '../shared/modules/icon/icon.module';
import { UserActionModule } from '../shared/modules/user-action/user-action.module';
import { GridModule } from '../shared/modules/grid/grid.module';

@NgModule({
  declarations: [
    LargeSreenContentComponent,
    TitleBarComponent,
    FooterComponent
  ],
  exports: [
    LargeSreenContentComponent
  ],
  imports: [
    CommonModule,
    CustomTranslateModule,
    IconModule,

    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,

    ButtonModule,
    RouterModule,
    UserActionModule,
    
    GridModule
  ]
})
export class LargerScreenContentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarFooterComponent } from './components/action-bar-footer/action-bar-footer.component';
import { MobileContentComponent } from './components/mobile-content/mobile-content.component';
import { SharedModule } from '../shared/shared.module';
import { SimpleTitleBarComponent } from './components/simple-title-bar/simple-title-bar.component';
import { CustomTranslateModule } from '../shared/modules/translate/custom-translate.module';
import { TransitionModule } from '../shared/modules/transition/transition.module';
import { ButtonModule } from '../shared/modules/button/button.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { IconModule } from '../shared/modules/icon/icon.module';
import { UserActionModule } from '../shared/modules/user-action/user-action.module';

@NgModule({
  declarations: [
    ActionBarFooterComponent,
    MobileContentComponent,
    SimpleTitleBarComponent
  ],
  exports: [
    MobileContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomTranslateModule,
    TransitionModule,
    ButtonModule,
    RouterModule,
    MatToolbarModule,
    IconModule,
    UserActionModule
  ]
})
export class MobileContentModule { }

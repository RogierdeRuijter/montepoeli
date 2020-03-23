import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarFooterComponent } from './components/action-bar-footer/action-bar-footer.component';
import { SimpleTitleBarComponent } from './components/simple-title-bar/simple-title-bar.component';
import { CustomTranslateModule } from '../../../../../shared/modules/translate/custom-translate.module';
import { TransitionModule } from '../../../../../shared/modules/transition/transition.module';
import { ButtonModule } from '../../../../../shared/modules/button/button.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconModule } from '../../../../../shared/modules/icon/icon.module';
import { GridModule } from '../../../../../shared/modules/grid/grid.module';
import { UserActionModule } from 'src/app/shared/modules/user-action/user-action.module';

@NgModule({
  declarations: [
    ActionBarFooterComponent,
    SimpleTitleBarComponent
  ],
  exports: [
    ActionBarFooterComponent,
    SimpleTitleBarComponent
  ],
  imports: [
    CommonModule,
    UserActionModule,
    CustomTranslateModule,
    TransitionModule,
    ButtonModule,
    RouterModule,
    MatToolbarModule,
    IconModule,
    GridModule
  ],
})
export class MobileContentModule { }

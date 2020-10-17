import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '../button/button.module';
import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { CustomTranslateModule } from '../translate/custom-translate.module';

@NgModule({
  declarations: [UserActionsComponent],
  exports: [UserActionsComponent],
  imports: [CommonModule, MatSelectModule, MatOptionModule, IconModule, ButtonModule, CustomTranslateModule],
})
export class UserActionModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatOptionModule } from '@angular/material';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '../button/button.module';
import { UserActionsComponent } from './components/user-actions/user-actions.component';



@NgModule({
  declarations: [UserActionsComponent],
  exports: [UserActionsComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    IconModule,
    ButtonModule
  ]
})
export class UserActionModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {GridModule} from '../../shared/modules/grid/grid.module';
import {ButtonModule} from '../../shared/modules/button/button.module';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {LoginRoutingModule} from './login-routing.module';
import {CustomTranslateModule} from '../../shared/modules/translate/custom-translate.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    GridModule,
    ButtonModule,
    FormsModule,
    MatInputModule,
    CustomTranslateModule,
  ],
})
export class LoginModule { }

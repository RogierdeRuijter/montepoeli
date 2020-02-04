import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridModule} from '../../../shared/modules/grid/grid.module';
import {ButtonModule} from '../../../shared/modules/button/button.module';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {LoginRoutingModule} from './login-routing.module';
import {CustomTranslateModule} from '../../../shared/modules/translate/custom-translate.module';
import { AuthModule } from 'src/app/shared/modules/auth/auth.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

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
    AuthModule
  ],
})
export class LoginModule { }

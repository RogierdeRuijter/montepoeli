import {StorybookTranslateModule} from './storybook-translate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginFormComponent } from 'src/app/main/modules/login/components/login-form/login-form.component';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';
import { FormModule } from 'src/app/shared/modules/form/form.module';
import { GridModule } from 'src/app/shared/modules/grid/grid.module';
import { MatInputModule } from '@angular/material/input';
import { CustomTranslateModule } from 'src/app/shared/modules/translate/custom-translate.module';
import { AuthModule } from 'src/app/shared/modules/auth/auth.module';

export default {
  title: 'Login form',
};

export const Login = () => ({
  component: LoginFormComponent,
  moduleMetadata: moduleMeta
});

const moduleMeta = {
  imports: [
    StorybookTranslateModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormModule,
    GridModule,
    FormModule,
    MatInputModule,
    CustomTranslateModule,
    AuthModule
  ]
}

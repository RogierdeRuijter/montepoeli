import { StorybookTranslateModule } from './storybook-translate.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from '../app/main/modules/login/components/login-form/login-form.component';
import { ButtonModule } from '../app/shared/modules/button/button.module';
import { FormModule } from '../app/shared/modules/form/form.module';
import { GridModule } from '../app/shared/modules/grid/grid.module';
import { MatInputModule } from '@angular/material/input';
import { CustomTranslateModule } from '../app/shared/modules/translate/custom-translate.module';
import { AuthModule } from '../app/shared/modules/auth/auth.module';

export default {
  title: 'Login form',
};

export const login = () => ({
  component: LoginFormComponent,
  moduleMetadata: moduleMeta,
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
    AuthModule,
  ],
};

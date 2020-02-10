import {storiesOf} from '@storybook/angular';
import {StorybookTranslateModule} from './storybook-translate.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginFormComponent } from 'src/app/main/modules/login/components/login-form/login-form.component';
import { ButtonModule } from 'src/app/shared/modules/button/button.module';
import { FormModule } from 'src/app/shared/modules/form/form.module';
import { GridModule } from 'src/app/shared/modules/grid/grid.module';
import { FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CustomTranslateModule } from 'src/app/shared/modules/translate/custom-translate.module';
import { AuthModule } from 'src/app/shared/modules/auth/auth.module';


storiesOf('LoginForm', module)
  .add('Landing', () => ({
    component: LoginFormComponent,
    props: {},
    moduleMetadata: {
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
    },
  }))
;

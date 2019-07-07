import {storiesOf} from '@storybook/angular';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {StorybookTranslateModule} from './storybook-translate.module';
import {TranslateDirective} from '../app/modules/shared/modules/translate/translate.directive';
import {BootstrapRowDirective} from '../app/modules/shared/directives/bootstrap-row.directive';
import {BootstrapColumnDirective} from '../app/modules/shared/directives/bootstrap-column.directive';
import {ButtonComponent} from '../app/modules/shared/components/button/button.component';
import {MaterialModule} from '../app/modules/material/material.module';
import {LoginFormComponent} from '../app/components/login/login-form/login-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

storiesOf('LoginForm', module)
  .add('Landing', () => ({
    component: LoginFormComponent,
    props: {},
    moduleMetadata: {
      imports: [
        MatButtonModule,
        MatDialogModule,
        MaterialModule,
        StorybookTranslateModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        TranslateDirective,
        BootstrapRowDirective,
        BootstrapColumnDirective,
        ButtonComponent],
      providers: [],
    },
  }))
;


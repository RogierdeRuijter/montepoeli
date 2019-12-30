import {storiesOf} from '@storybook/angular';
import {MatButtonModule, MatDialogModule, MatPlaceholder, MatFormField, MatFormFieldModule} from '@angular/material';
import {StorybookTranslateModule} from './storybook-translate.module';
import {TranslateDirective} from '../app/shared/modules/translate/directives/translate.directive';
import {GridRowDirective} from '../app/shared/modules/grid/directives/grid-row.directive';
import {GridColumnDirective} from '../app/shared/modules/grid/directives/grid-column.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginFormComponent } from 'src/app/modules/login/components/login/login-form/login-form.component';
import { ButtonComponent } from 'src/app/shared/modules/button/components/button/button.component';

storiesOf('LoginForm', module)
  .add('Landing', () => ({
    component: LoginFormComponent,
    props: {},
    moduleMetadata: {
      imports: [
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        StorybookTranslateModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        TranslateDirective,
        GridRowDirective,
        GridColumnDirective,
        ButtonComponent
      ],
      providers: [],
    },
  }))
;

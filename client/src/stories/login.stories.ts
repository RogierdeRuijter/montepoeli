import {storiesOf} from '@storybook/angular';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {StorybookTranslateModule} from './storybook-translate.module';
import {TranslateDirective} from '../app/shared/modules/translate/directives/translate.directive';
import {GridRowDirective} from '../app/shared/modules/grid/directives/grid-row.directive';
import {GridColumnDirective} from '../app/shared/modules/grid/directives/grid-column.directive';
import {ButtonComponent} from '../app/modules/shared/components/button/button.component';
import {MaterialModule} from '../app/modules/material/material.module';
import {LoginFormComponent} from '../app/modules/login/login/login-form/login-form.component';
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
        GridRowDirective,
        GridColumnDirective,
        ButtonComponent],
      providers: [],
    },
  }))
;

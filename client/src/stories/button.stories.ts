import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from '../app/modules/shared/components/button/button.component';
import {ButtonFunction, ButtonType} from '../app/modules/shared/static-files/enums';
import {MatButtonModule} from '@angular/material/button';
import {TranslateDirective} from '../app/modules/shared/modules/translate/directives/translate.directive';
import {StorybookTranslateModule} from './storybook-translate.module';
import {MatDialogModule} from '@angular/material';
import {withScreenshot} from 'storybook-chrome-screenshot';

storiesOf('Buttons', module)
  .add('Primary button', withScreenshot()(() => ({
    component: ButtonComponent,
    props: {
      buttonFunction: ButtonFunction.LOGIN,
      buttonType: ButtonType.PRIMARY,
    },
    moduleMetadata: {
      imports: [
        MatButtonModule,
        MatDialogModule,
        StorybookTranslateModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  })))
  .add('Secondary button', () => ({
    component: ButtonComponent,
    props: {
      buttonFunction: ButtonFunction.LOGIN,
      buttonType: ButtonType.SECONDARY,
    },
    moduleMetadata: {
      imports: [
        MatButtonModule,
        MatDialogModule,
        StorybookTranslateModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }));

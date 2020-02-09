import {storiesOf} from '@storybook/angular';
import {ButtonFunction, ButtonType} from '../app/shared/static-files/enums';
import {MatButtonModule} from '@angular/material/button';
import {TranslateDirective} from '../app/shared/modules/translate/directives/translate.directive';
import {StorybookTranslateModule} from './storybook-translate.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from 'src/app/shared/modules/button/components/button/button.component';

storiesOf('Buttons', module)
  .add('Primary button', (() => ({
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

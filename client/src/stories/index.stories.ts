import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from '../app/components/button/button.component';
import {ButtonFunction, ButtonType} from '../app/static-files/enums';
import {MatButtonModule} from '@angular/material';
import {TranslateDirective} from '../app/directives/translate.directive';
import {CustomTranslateModule} from '../app/modules/custom-translate.module';

storiesOf('Buttons', module)
  .add('Primary button', () => ({
    component: ButtonComponent,
    props: {
      buttonFunction: ButtonFunction.LOGIN,
      buttonType: ButtonType.PRIMARY,
    },
    moduleMetadata: {
      imports: [
        MatButtonModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Secondary button', () => ({
    component: ButtonComponent,
    props: {
      buttonFunction: ButtonFunction.LOGIN,
      buttonType: ButtonType.SECONDARY,
    },
    moduleMetadata: {
      imports: [
        MatButtonModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }));

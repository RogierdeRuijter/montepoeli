import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from '../app/modules/shared/components/button/button.component';
import {ButtonFunction, ButtonType} from '../app/modules/shared/static-files/enums';
import {MatButtonModule} from '@angular/material/button';
import {TranslateDirective} from '../app/modules/shared/directives/translate.directive';
import {CustomTranslateModule} from '../app/modules/custom-translate.module';
import {MatDialogModule} from '@angular/material';

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
        MatDialogModule,
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
        MatDialogModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }));

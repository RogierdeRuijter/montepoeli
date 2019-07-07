import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from '../app/modules/shared/components/button/button.component';
import {ButtonFunction, ButtonRowType, ButtonType} from '../app/modules/shared/static-files/enums';
import {MatButtonModule} from '@angular/material/button';
import {TranslateDirective} from '../app/modules/shared/modules/translate/translate.directive';
import {StorybookTranslateModule} from './storybook-translate.module';
import {MatDialogModule} from '@angular/material';
import {ButtonRowComponent} from '../app/modules/shared/components/button-row/button-row.component';
import {BootstrapRowDirective} from '../app/modules/shared/directives/bootstrap-row.directive';
import {BootstrapColumnDirective} from '../app/modules/shared/directives/bootstrap-column.directive';

storiesOf('Button row', module)
  .add('2 buttons', () => ({
    component: ButtonRowComponent,
    props: {
      buttonRowType: ButtonRowType.TWO,
      buttonFunctions: [ButtonFunction.CANCEL, ButtonFunction.SAVE],
      buttonTypes: [ButtonType.PRIMARY, ButtonType.PRIMARY],
    },
    moduleMetadata: {
      imports: [
        MatButtonModule,
        MatDialogModule,
        StorybookTranslateModule,
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

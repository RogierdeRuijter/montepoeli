import { ButtonFunction, ButtonRowType, ButtonType } from '../app/shared/static-files/enums';
import { MatButtonModule } from '@angular/material/button';
import { TranslateDirective } from '../app/shared/modules/translate/directives/translate.directive';
import { StorybookTranslateModule } from './storybook-translate.module';
import { ButtonRowComponent } from '../app/shared/modules/button/components/button-row/button-row.component';
import { GridRowDirective } from '../app/shared/modules/grid/directives/grid-row.directive';
import { GridColumnDirective } from '../app/shared/modules/grid/directives/grid-column.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../app/shared/modules/button/components/button/button.component';

export default {
  title: 'Button Row',
};

export const primaryButton = () => ({
  component: ButtonRowComponent,
  props: {
    buttonRowType: ButtonRowType.TWO,
    buttonFunctions: [ButtonFunction.CANCEL, ButtonFunction.SAVE],
    buttonTypes: [ButtonType.PRIMARY, ButtonType.PRIMARY],
  },
  moduleMetadata: moduleMeta,
});

const moduleMeta = {
  imports: [MatButtonModule, MatDialogModule, StorybookTranslateModule],
  declarations: [TranslateDirective, GridRowDirective, GridColumnDirective, ButtonComponent],
  providers: [],
};

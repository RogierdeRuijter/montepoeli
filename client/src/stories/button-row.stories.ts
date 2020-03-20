import {ButtonFunction, ButtonRowType, ButtonType} from '../app/shared/static-files/enums';
import {MatButtonModule} from '@angular/material/button';
import {TranslateDirective} from '../app/shared/modules/translate/directives/translate.directive';
import {StorybookTranslateModule} from './storybook-translate.module';
import {ButtonRowComponent} from '../app/shared/modules/button/components/button-row/button-row.component';
import {GridRowDirective} from '../app/shared/modules/grid/directives/grid-row.directive';
import {GridColumnDirective} from '../app/shared/modules/grid/directives/grid-column.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from 'src/app/shared/modules/button/components/button/button.component';
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';

export default {
  title: 'Button Row'
};
export const primaryButtonsLightTheme = () => ({
  template: `
  <div class="light-theme">
    <app-button-row [buttonRowType]="buttonRowType" [buttonFunctions]="buttonFunctions" [buttonTypes]="buttonTypes"></app-button-row>
  </div>
  `,
  props: {
    buttonRowType: ButtonRowType.TWO,
    buttonFunctions: [ButtonFunction.CANCEL, ButtonFunction.SAVE],
    buttonTypes: [ButtonType.PRIMARY, ButtonType.PRIMARY]
  },
  moduleMetadata: moduleMeta
});

export const primaryButtonsDarkTheme = () => ({
  template: `
  <div class="dark-theme">
    <app-button-row [buttonRowType]="buttonRowType" [buttonFunctions]="buttonFunctions" [buttonTypes]="buttonTypes"></app-button-row>
  </div>
  `,
  props: {
    buttonRowType: ButtonRowType.TWO,
    buttonFunctions: [ButtonFunction.CANCEL, ButtonFunction.SAVE],
    buttonTypes: [ButtonType.PRIMARY, ButtonType.PRIMARY]
  },
  moduleMetadata: moduleMeta
});


const moduleMeta = {
  imports: [
    MatButtonModule,
    MatDialogModule,
    StorybookTranslateModule,
  ],
  declarations: [
    TranslateDirective,
    GridRowDirective,
    GridColumnDirective,
    ButtonComponent,
    ButtonRowComponent
  ],
  providers: [],
}

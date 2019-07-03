import {storiesOf} from '@storybook/angular';
import {DialogDataComponent} from '../../app/modules/game/components/game/dialog-data/dialog-data.component';
import {MaterialModule} from '../../app/modules/material/material.module';
import {ButtonComponent} from '../../app/modules/shared/components/button/button.component';
import {CustomTranslateModule} from '../../app/modules/custom-translate.module';
import {TranslateDirective} from '../../app/modules/shared/directives/translate.directive';
import {BootstrapRowDirective} from '../../app/modules/shared/directives/bootstrap-row.directive';
import {BootstrapColumnDirective} from '../../app/modules/shared/directives/bootstrap-column.directive';
import {MatDialogRef} from '@angular/material';

storiesOf('DialogDataComponent', module)
  .add('regular', () => ({
    component: DialogDataComponent,
    props: {},
    moduleMetadata: {
      imports: [
        MaterialModule,
        CustomTranslateModule,
      ],
      declarations: [
        ButtonComponent,
        TranslateDirective,
        BootstrapRowDirective,
        BootstrapColumnDirective,
      ],
      providers: [
        MatDialogRef,
      ],
    },
  }));

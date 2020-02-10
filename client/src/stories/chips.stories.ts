import { storiesOf } from '@storybook/angular';
import { ChipsComponent } from 'src/app/shared/modules/chip/components/chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { StorybookTranslateModule } from './storybook-translate.module';

storiesOf('Chips', module)
  .add('List', (() => ({
    component: ChipsComponent,
    props: {},
    moduleMetadata: {
      imports: [
        MatChipsModule,
        StorybookTranslateModule
      ],
      declarations: [],
      providers: [],
    },
  })));

  // TranslateDirective

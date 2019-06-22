import {storiesOf} from '@storybook/angular';
import {Icons, IconSize} from '../app/modules/shared/static-files/enums';
import {TranslateDirective} from '../app/modules/shared/directives/translate.directive';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconComponent} from '../app/modules/shared/components/icon/icon.component';

storiesOf('Icons', module)
  .add('Check no size', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CHECK,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Check small', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CHECK,
      iconSize: IconSize.SMALL,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Check medium', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CHECK,
      iconSize: IconSize.MEDIUM,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Check medium disabled', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CHECK,
      iconSize: IconSize.MEDIUM,
      disabled: true,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Check large', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CHECK,
      iconSize: IconSize.LARGE,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Cross medium', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CROSS,
      iconSize: IconSize.MEDIUM,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Cross medium disabled', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CROSS,
      iconSize: IconSize.MEDIUM,
      disabled: true,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Cross large', () => ({
    component: IconComponent,
    props: {
      icon: Icons.CROSS,
      iconSize: IconSize.LARGE,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Plus no size specified', () => ({
    component: IconComponent,
    props: {
      icon: Icons.PLUS,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
  .add('Plus, no size specified, disabled', () => ({
    component: IconComponent,
    props: {
      icon: Icons.PLUS,
      disabled: true,
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [TranslateDirective],
      providers: [],
    },
  }))
;

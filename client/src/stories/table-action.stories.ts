import {storiesOf} from '@storybook/angular';
import {Actions} from '../app/shared/static-files/enums';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconComponent} from '../app/shared/modules/icon/components/icon/icon.component';
import { TableActionComponent } from 'src/app/shared/modules/home/modules/game/components/overview/table-action/table-action.component';

storiesOf('Table action', module)
  .add('Add', () => ({
    component: TableActionComponent,
    props: {
      actions: [Actions.ADD],
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [IconComponent],
      providers: [],
    },
  }))
  .add('Add and accept', () => ({
    component: TableActionComponent,
    props: {
      actions: [Actions.ADD, Actions.ACCEPT],
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [IconComponent],
      providers: [],
    },
  }))
  .add('Add and accept with add disabled', () => ({
    component: TableActionComponent,
    props: {
      actions: [Actions.ADD, Actions.ACCEPT],
      disabled: [true, false],
    },
    moduleMetadata: {
      imports: [
        FontAwesomeModule,
      ],
      declarations: [IconComponent],
      providers: [],
    },
  }))
;

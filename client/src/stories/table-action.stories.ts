import {storiesOf} from '@storybook/angular';
import {Actions} from '../app/shared/static-files/enums';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TableActionComponent} from '../app/modules/home/modules/game/components/game/overview/table-action/table-action.component';
import {IconComponent} from '../app/shared/modules/icon/components/icon/icon.component';
import { ButtonIconComponent } from 'src/app/shared/modules/button/components/button-icon/button-icon.component';

storiesOf('Table action', module)
  .add('Add', () => ({
    component: TableActionComponent,
    props: {
      actions: [Actions.ADD],
    },
    moduleMetadata: moduleMetadata,
  }))
  .add('Add and accept', () => ({
    component: TableActionComponent,
    props: {
      actions: [Actions.ADD, Actions.ACCEPT],
    },
    moduleMetadata: moduleMetadata,
  }))
  .add('Add and accept with add disabled', () => ({
    component: TableActionComponent,
    props: {
      actions: [Actions.ADD, Actions.ACCEPT],
      disabled: [true, false],
    },
    moduleMetadata: moduleMetadata,
  }))
;

const moduleMetadata = {
  imports: [
    FontAwesomeModule,
  ],
  declarations: [
    IconComponent,
    ButtonIconComponent
  ],
  providers: [],
}

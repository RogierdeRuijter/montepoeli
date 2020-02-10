import {storiesOf} from '@storybook/angular';
import {Actions} from '../app/shared/static-files/enums';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconComponent} from '../app/shared/modules/icon/components/icon/icon.component';
import { TableActionComponent } from 'src/app/shared/modules/home/modules/game/components/overview/table-action/table-action.component';

export default {
  title: 'Table action',
};

export const add = () => ({
  component: TableActionComponent,
  props: {
    actions: [Actions.ADD]
  },
  moduleMetadata: moduleMeta
});

export const addAndAccept = () => ({
  component: TableActionComponent,
  props: {
    actions: [Actions.ADD]
  },
  moduleMetadata: moduleMeta
});

export const addAndAcceptWithAddDisabled = () => ({
  component: TableActionComponent,
  props: {
    actions: [Actions.ADD, Actions.ACCEPT],
    disabled: [true, false],
  },
  moduleMetadata: moduleMeta
});


const moduleMeta = {
  imports: [
    FontAwesomeModule,
  ],
  declarations: [IconComponent],
  providers: [],
};

// storiesOf('Table action', module)
  // .add('Add', () => ({
  //   component: TableActionComponent,
  //   props: {
  //     actions: [Actions.ADD],
  //   },
  //   moduleMetadata: {
  //     imports: [
  //       FontAwesomeModule,
  //     ],
  //     declarations: [IconComponent],
  //     providers: [],
  //   },
  // }))
  // .add('Add and accept', () => ({
  //   component: TableActionComponent,
  //   props: {
  //     actions: [Actions.ADD, Actions.ACCEPT],
  //   },
  //   moduleMetadata: 
    
  //   ))
  // .add('Add and accept with add disabled', () => ({
  //   component: TableActionComponent,
  //   props: {
  //     actions: [Actions.ADD, Actions.ACCEPT],
  //     disabled: [true, false],
  //   },
  //   moduleMetadata: {
  //     imports: [
  //       FontAwesomeModule,
  //     ],
  //     declarations: [IconComponent],
  //     providers: [],
  //   },
  // }))
// ;

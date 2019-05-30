import {storiesOf} from '@storybook/angular';
import {TranslateDirective} from '../app/directives/translate.directive';
import {CustomTranslateModule} from '../app/modules/custom-translate.module';
import {GameTableComponent} from '../app/components/home/table/game-table.component';
import {MatTableModule} from '@angular/material';

storiesOf('GameTable', module)
  .add('Zero games', () => ({
    component: GameTableComponent,
    props: {
      games: [],
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Two games', () => ({
    component: GameTableComponent,
    props: {
      games: [
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
      ],
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Two games with long names', () => ({
    component: GameTableComponent,
    props: {
      games: [
        {white: 'user user user user user 1', black: 'user user user user user 2', winner: 'white'},
        {white: 'user user user user user 1', black: 'user user user user user 2', winner: 'black'},
      ],
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Two games and unkown winner states', () => ({
    component: GameTableComponent,
    props: {
      games: [
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'user 1', black: 'user 2', winner: 'unknown1'},
      ],
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Three games', () => ({
    component: GameTableComponent,
    props: {
      games: [
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
      ],
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Many games', () => ({
    component: GameTableComponent,
    props: {
      games: [
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
      ],
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
;

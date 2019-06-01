import {storiesOf} from '@storybook/angular';
import {TranslateDirective} from '../app/directives/translate.directive';
import {CustomTranslateModule} from '../app/modules/custom-translate.module';
import {GameTableComponent} from '../app/components/home/game-table/game-table.component';
import {MatTableModule} from '@angular/material';
import {of} from 'rxjs';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';


const displayedColumns: string[] = ['white', 'winner', 'black'];

storiesOf('GameTable', module)
  .add('Zero games', () => ({
    component: GameTableComponent,
    props: {
      games$: of([]),
      displayedColumns: displayedColumns,
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
      games$: [
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
      ],
      displayedColumns: displayedColumns,
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
      games$: of([
        {white: 'user user user user user 1', black: 'user user user user user 2', winner: 'white'},
        {white: 'user user user user user 1', black: 'user user user user user 2', winner: 'black'},
      ]),
      displayedColumns: displayedColumns,
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
      games$: of([
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'user 1', black: 'user 2', winner: 'unknown1'},
      ]),
      displayedColumns: displayedColumns,
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Three games$', () => ({
    component: GameTableComponent,
    props: {
      games$: of([
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
      ]),
      displayedColumns: displayedColumns,
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Many games$', () => ({
    component: GameTableComponent,
    props: {
      games$: of([
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
      ]),
      displayedColumns: displayedColumns,
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
  .add('Three loading games', () => ({
    component: GameTableComponent,
    props: {
      games$: of([
        {white: 'user 1', black: 'user 2', winner: 'white'},
        {white: 'user 1', black: 'user 2', winner: 'black'},
        {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
      ]),
      displayedColumns: displayedColumns,
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        CustomTranslateModule,
        NgxSkeletonLoaderModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
;

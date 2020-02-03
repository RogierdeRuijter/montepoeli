import {storiesOf} from '@storybook/angular';
import {TranslateDirective} from '../app/shared/modules/translate/directives/translate.directive';
import {StorybookTranslateModule} from './storybook-translate.module';
import {MatTableModule} from '@angular/material';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {GameTableLoaderComponent} from '../app/modules/home/modules/game/components/game/overview/game-table-loader/game-table-loader.component';

const displayedColumns: string[] = ['white', 'winner', 'black'];
storiesOf('GameTableLoader', module)
  .add('2 Games', () => ({
    component: GameTableLoaderComponent,
    props: {
      games: [{}, {}],
      displayedColumns: displayedColumns,
    },
    moduleMetadata: {
      imports: [
        MatTableModule,
        StorybookTranslateModule,
        NgxSkeletonLoaderModule,
      ],
      declarations: [TranslateDirective],
    },
  }))
;
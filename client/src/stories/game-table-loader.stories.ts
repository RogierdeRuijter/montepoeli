import {storiesOf} from '@storybook/angular';
import {TranslateDirective} from '../app/modules/shared/modules/translate/translate.directive';
import {StorybookTranslateModule} from './storybook-translate.module';
import {MatTableModule} from '@angular/material';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {GameTableLoaderComponent} from '../app/modules/overview/modules/game/components/game/game-view/game-table-loader/game-table-loader.component';

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

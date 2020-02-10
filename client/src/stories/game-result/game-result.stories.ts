import {storiesOf} from '@storybook/angular';
import {GameResultComponent} from '../../app/shared/modules/add-game/components/dialog-data/game-result/game-result.component';
import {StorybookTranslateModule} from '../storybook-translate.module';
import {GridRowDirective} from '../../app/shared/modules/grid/directives/grid-row.directive';
import {GridColumnDirective} from '../../app/shared/modules/grid/directives/grid-column.directive';
import {Winners} from '../../app/shared/static-files/enums';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormModule} from '../../app/shared/modules/form/form.module';
import {CustomTranslateModule} from '../../app/shared/modules/translate/custom-translate.module';
import { ButtonComponent } from 'src/app/shared/modules/button/components/button/button.component';

const winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

storiesOf('GameResult', module)
  .add('2eae', () => ({
    component: GameResultComponent,
    props: {
      winners: winners,
      data: {},
      usersWhite: [{name: 'Bartholomewjidfijfdjifsdsf'}, {name: 'user2'}, {name: 'user3'}],
      usersBlack: [{name: 'user4'}, {name: 'user5'}, {name: 'user6'}],
      winnerOptions: ['White', 'Draw', 'Black'],
    },
    moduleMetadata: {
      imports: [
        StorybookTranslateModule,
        BrowserAnimationsModule,
        FormModule,
        CustomTranslateModule,
      ],
      declarations: [
        ButtonComponent,
        GridRowDirective,
        GridColumnDirective,
      ]
    },
  }));

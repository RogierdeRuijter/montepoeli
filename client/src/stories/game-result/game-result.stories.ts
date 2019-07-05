import {storiesOf} from '@storybook/angular';
import {GameResultComponent} from '../../app/modules/game/components/game/dialog-data/game-result/game-result.component';
import {CustomTranslateModule} from '../../app/modules/custom-translate.module';
import {TranslateDirective} from '../../app/modules/shared/directives/translate.directive';
import {MaterialModule} from '../../app/modules/material/material.module';
import {BootstrapRowDirective} from '../../app/modules/shared/directives/bootstrap-row.directive';
import {BootstrapColumnDirective} from '../../app/modules/shared/directives/bootstrap-column.directive';
import {ButtonComponent} from '../../app/modules/shared/components/button/button.component';
import {UnSelectOnSecondSelectDirective} from '../../app/modules/game/directives/un-select-on-second-select.directive';
import {Winners} from '../../app/modules/shared/static-files/enums';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconComponent} from '../../app/modules/shared/components/icon/icon.component';

const winners: Winners[] = [Winners.WHITE, Winners.BLACK, Winners.DRAW];

storiesOf('GameResult', module)
  .add('2eae', () => ({
    component: GameResultComponent,
    props: {
      winners: winners,
      data: {},
      usersWhite: [{name: 'Bartholomewjidfijfdjifsdsf'}, {name: 'user2'}, {name: 'user3'}],
      usersBlack: [{name: 'user4'}, {name: 'user5'}, {name: 'user6'}],
    },
    moduleMetadata: {
      imports: [
        CustomTranslateModule,
        MaterialModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
      ],
      declarations: [
        TranslateDirective,
        ButtonComponent,
        BootstrapRowDirective,
        BootstrapColumnDirective,
        UnSelectOnSecondSelectDirective,
        IconComponent,
      ],
      providers: [],
    },
  }));

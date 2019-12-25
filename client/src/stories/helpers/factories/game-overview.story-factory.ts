import {CompleteStory} from '../intefaces/complete-story.interface';
import {GameTableComponent} from '../../../app/modules/game/components/game/overview/game-table/game-table.component';
import {of} from 'rxjs';
import {MatTableModule} from '@angular/material';
import {StorybookTranslateModule} from '../../storybook-translate.module';
import {TranslateDirective} from '../../../app/modules/shared/modules/translate/translate.directive';
import {OverviewComponent} from '../../../app/modules/game/components/game/overview/overview.component';
import {Actions} from '../../../app/modules/shared/static-files/enums';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GameTableLoaderComponent} from '../../../app/modules/game/components/game/overview/game-table-loader/game-table-loader.component';
import {TableActionComponent} from '../../../app/modules/game/components/game/overview/table-action/table-action.component';
import {GridColumnDirective} from '../../../app/modules/shared/directives/grid-column.directive';
import {GridRowDirective} from '../../../app/modules/shared/directives/grid-row.directive';
import {IconComponent} from '../../../app/modules/shared/modules/icon/icon/icon.component';
import {PositionDirective} from '../../../app/modules/shared/directives/position.directive';
import { StoryApi, StoryFn } from '@storybook/addons';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';


export class GameOverviewStoryFactory {
  private component = OverviewComponent;
  private readonly displayedColumns: string[] = ['white', 'winner', 'black'];
  private stories: CompleteStory[] = [];
  private actions: Actions[] = [Actions.ADD];
  private readonly module: any;

  constructor(private storyApi: StoryApi<StoryFnAngularReturnType>) {    
    this.module = {
      imports: [
        MatTableModule,
        StorybookTranslateModule,
        NgxSkeletonLoaderModule,
        FontAwesomeModule,
      ],
      declarations: [
        TranslateDirective,
        GameTableLoaderComponent,
        GameTableComponent,
        TableActionComponent,
        GridColumnDirective,
        GridRowDirective,
        PositionDirective,
        IconComponent,
      ],
    };
  }

  public create(): void {
    this.createInputs();
    this.appendStories();
  }

  private createInputs(): void {
    this.stories.push({
      name: '2 games',
      story: this.twoGameStory(),
    });

    this.stories.push({
      name: '7 games',
      story: this.sevenGameStory(),
    });

    this.stories.push({
      name: '17 games',
      story: this.sevenTeenGameStory(),
    });

    this.stories.push({
      name: '35 games',
      story: this.thirtyFiveGameStory(),
    });
  }

  private twoGameStory(): StoryFn<StoryFnAngularReturnType> {
    return () => ({
        component: this.component,
        props: {
          actions: this.actions,
          displayedColumns: this.displayedColumns,
          loading: false,
          games$: of([
            {
              'white': 'Nell',
              'black': 'Freeman',
              'winner': 'White',
            },
            {
              'white': 'Doyle',
              'black': 'Stevens',
              'winner': 'Draw',
            },
          ]),
        },
        moduleMetadata: this.module,
      }
    );
  }

  private sevenGameStory(): StoryFn<StoryFnAngularReturnType> {
    return () => ({
        component: this.component,
        props: {
          actions: this.actions,
          displayedColumns: this.displayedColumns,
          loading: false,
          games$: of([
            {'white': 'Pamela', 'black': 'Vincent', 'winner': 'White'},
            {'white': 'Sharon', 'black': 'Puckett', 'winner': 'White'},
            {'white': 'Elena', 'black': 'Dorothea', 'winner': 'Black'},
            {'white': 'Head', 'black': 'Brandi', 'winner': 'White'},
            {'white': 'Colon', 'black': 'Cantu', 'winner': 'Draw'},
            {'white': 'Tamika', 'black': 'Lindsey', 'winner': 'Draw'},
            {'white': 'Snyder', 'black': 'Forbes', 'winner': 'Draw'},
          ]),
        },
        moduleMetadata: this.module,
      }
    );
  }

  private sevenTeenGameStory(): StoryFn<StoryFnAngularReturnType> {
    return () => ({
        component: this.component,
        props: {
          actions: this.actions,
          displayedColumns: this.displayedColumns,
          loading: false,
          games$: of([
            {
              'white': 'Sallie',
              'black': 'Janelle',
              'winner': 'Draw',
            },
            {
              'white': 'Donna',
              'black': 'Meadows',
              'winner': 'White',
            },
            {
              'white': 'Amanda',
              'black': 'Jan',
              'winner': 'Draw',
            },
            {
              'white': 'Gabriela',
              'black': 'Charmaine',
              'winner': 'Draw',
            },
            {
              'white': 'Dennis',
              'black': 'Keri',
              'winner': 'Black',
            },
            {
              'white': 'Fran',
              'black': 'Reyna',
              'winner': 'Draw',
            },
            {
              'white': 'Trina',
              'black': 'Terra',
              'winner': 'Black',
            },
            {
              'white': 'Hess',
              'black': 'Murray',
              'winner': 'White',
            },
            {
              'white': 'Queen',
              'black': 'Wright',
              'winner': 'Draw',
            },
            {
              'white': 'Mcgowan',
              'black': 'Kari',
              'winner': 'White',
            },
            {
              'white': 'Benton',
              'black': 'Marshall',
              'winner': 'Black',
            },
            {
              'white': 'Gilmore',
              'black': 'Meyer',
              'winner': 'White',
            },
            {
              'white': 'Berta',
              'black': 'Candy',
              'winner': 'Black',
            },
            {
              'white': 'Wilkins',
              'black': 'Cain',
              'winner': 'Black',
            },
            {
              'white': 'Angelique',
              'black': 'Miles',
              'winner': 'Draw',
            },
            {
              'white': 'David',
              'black': 'Rita',
              'winner': 'White',
            },
            {
              'white': 'Bartlett',
              'black': 'Dixie',
              'winner': 'White',
            },
          ]),
        },
        moduleMetadata: this.module,
      }
    );
  }

  private thirtyFiveGameStory(): StoryFn<StoryFnAngularReturnType> {
    return () => ({
        component: this.component,
        props: {
          actions: this.actions,
          displayedColumns: this.displayedColumns,
          loading: false,
          games$: of([
            {'white': 'Muriel', 'black': 'Marcy', 'winner': 'Draw'},
            {'white': 'Petersen', 'black': 'Sherman', 'winner': 'Draw'},
            {'white': 'Tammy', 'black': 'Mitchell', 'winner': 'Draw'},
            {'white': 'Amparo', 'black': 'Susanne', 'winner': 'White'},
            {'white': 'Cardenas', 'black': 'Helena', 'winner': 'Black'},
            {'white': 'Matthews', 'black': 'Sasha', 'winner': 'Black'},
            {'white': 'Erna', 'black': 'Lynette', 'winner': 'Black'},
            {'white': 'Jessie', 'black': 'Schwartz', 'winner': 'White'},
            {'white': 'Trujillo', 'black': 'Prince', 'winner': 'Draw'},
            {'white': 'Vanessa', 'black': 'Bertie', 'winner': 'Black'},
            {'white': 'Jordan', 'black': 'Elise', 'winner': 'Black'},
            {'white': 'Thelma', 'black': 'Hawkins', 'winner': 'White'},
            {'white': 'Maritza', 'black': 'Salinas', 'winner': 'Draw'},
            {'white': 'Corrine', 'black': 'Woodward', 'winner': 'Black'},
            {'white': 'Ila', 'black': 'Mercer', 'winner': 'Draw'},
            {'white': 'Joanne', 'black': 'Mindy', 'winner': 'Black'},
            {'white': 'Marisa', 'black': 'Jimenez', 'winner': 'Draw'},
            {'white': 'Robbie', 'black': 'Colleen', 'winner': 'Black'},
            {'white': 'Cervantes', 'black': 'Helen', 'winner': 'Draw'},
            {'white': 'Bethany', 'black': 'Sargent', 'winner': 'Draw'},
            {'white': 'Mona', 'black': 'Ferguson', 'winner': 'Draw'},
            {'white': 'Hodges', 'black': 'Roxanne', 'winner': 'Draw'},
            {'white': 'Lacey', 'black': 'Carson', 'winner': 'Black'},
            {'white': 'Gina', 'black': 'Rebekah', 'winner': 'White'},
            {'white': 'Compton', 'black': 'Rios', 'winner': 'White'},
            {'white': 'Alford', 'black': 'Lowery', 'winner': 'White'},
            {'white': 'Greene', 'black': 'Spencer', 'winner': 'Draw'},
            {'white': 'Donna', 'black': 'Conner', 'winner': 'Black'},
            {'white': 'Randolph', 'black': 'Deloris', 'winner': 'Draw'},
            {'white': 'Mcpherson', 'black': 'Langley', 'winner': 'Draw'},
            {'white': 'Tate', 'black': 'French', 'winner': 'White'},
            {'white': 'Parks', 'black': 'Shelia', 'winner': 'Draw'},
            {'white': 'Patterson', 'black': 'Rosetta', 'winner': 'Draw'},
            {'white': 'Park', 'black': 'Valarie', 'winner': 'Black'},
            {'white': 'Cummings', 'black': 'Frederick', 'winner': 'Black'},
          ]),
        },
        moduleMetadata: this.module,
      }
    );
  }


  private appendStories(): void {
    this.stories.forEach((story: CompleteStory) => this.storyApi.add(story.name, story.story));
  }
}

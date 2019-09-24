import {CompleteStory} from '../intefaces/complete-story.interface';
import {GameTableComponent} from '../../../app/modules/game/components/game/game-table/game-table.component';
import {of} from 'rxjs';
import {MatTableModule} from '@angular/material';
import {StorybookTranslateModule} from '../../storybook-translate.module';
import {TranslateDirective} from '../../../app/modules/shared/modules/translate/translate.directive';
import {StoryApi} from '@storybook/addons/src/types';
import {StoryFn} from '@storybook/addons';


export class GameTableStoryFactory {
  private component = GameTableComponent;
  private readonly displayedColumns: string[] = ['white', 'winner', 'black'];
  private stories: CompleteStory[] = [];

  constructor(private storiesInterface: StoryApi<unknown>) {
  }

  public create(): void {
    this.createInputs();
    this.appendStories();
  }

  private appendStories(): void {
    this.stories.forEach((story: CompleteStory) => this.storiesInterface.add(story.name, story.story));
  }

  private createInputs(): void {
    this.stories.push({
      name: 'Zero games',
      story: this.zeroGameStory(),
    });

    this.stories.push({
      name: 'Two games',
      story: this.twoGamesStory(),
    });

    this.stories.push({
      name: 'Two games with long names',
      story: this.twoGamesWithLongNames(),
    });

    this.stories.push({
      name: 'Two games and unknown winner states',
      story: this.twoGamesWithLongNames(),
    });

    this.stories.push({
      name: 'Two games and unkown winner states',
      story: this.twoGamesAndUnknownWinnerStates(),
    });

    this.stories.push({
      name: 'Three games',
      story: this.threeGames(),
    });

    this.stories.push({
      name: 'Many games',
      story: this.manyGames(),
    });
  }

  private zeroGameStory(): StoryFn<unknown> {
    return () => ({
      component: this.component,
      props: {
        games$: of([]),
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          StorybookTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private twoGamesStory(): StoryFn<unknown> {
    return () => ({
      component: GameTableComponent,
      props: {
        games$: of([
          {white: 'user 1', black: 'user 2', winner: 'white'},
          {white: 'user 1', black: 'user 2', winner: 'black'},
        ]),
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          StorybookTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private twoGamesWithLongNames(): StoryFn<unknown> {
    return () => ({
      component: GameTableComponent,
      props: {
        games$: of([
          {white: 'user user user user user 1', black: 'user user user user user 2', winner: 'white'},
          {white: 'user user user user user 1', black: 'user user user user user 2', winner: 'black'},
        ]),
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          StorybookTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private twoGamesAndUnknownWinnerStates(): StoryFn<unknown> {
    return () => ({
      component: GameTableComponent,
      props: {
        games$: of([
          {white: 'user 1', black: 'user 2', winner: 'black'},
          {white: 'user 1', black: 'user 2', winner: 'unknown1'},
        ]),
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          StorybookTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private threeGames(): StoryFn<unknown> {
    return () => ({
      component: GameTableComponent,
      props: {
        games$: of([
          {white: 'user 1', black: 'user 2', winner: 'white'},
          {white: 'user 1', black: 'user 2', winner: 'black'},
          {white: 'useruseruser 1', black: 'useruseruser 2', winner: 'draw'},
        ]),
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          StorybookTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private manyGames(): StoryFn<unknown> {
    return () => ({
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
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          StorybookTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }
}

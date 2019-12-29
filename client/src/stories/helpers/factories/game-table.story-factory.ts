import {CompleteStory} from '../intefaces/complete-story.interface';
import {GameTableComponent} from '../../../app/modules/home/modules/game/components/game/overview/game-table/game-table.component';
import {of} from 'rxjs';
import {MatTableModule} from '@angular/material';
import {StorybookTranslateModule} from '../../storybook-translate.module';
import {TranslateDirective} from '../../../app/shared/modules/translate/directives/translate.directive';
import { StoryApi, StoryFn } from '@storybook/addons';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';


export class GameTableStoryFactory {
  private component = GameTableComponent;
  private readonly displayedColumns: string[] = ['white', 'winner', 'black'];
  private stories: CompleteStory[] = [];

  constructor(private storyApi: StoryApi<StoryFnAngularReturnType>) {
  }

  public create(): void {
    this.createInputs();
    this.appendStories();
  }

  private appendStories(): void {
    this.stories.forEach((story: CompleteStory) => this.storyApi.add(story.name, story.story));
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

  private zeroGameStory(): StoryFn<StoryFnAngularReturnType> {
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

  private twoGamesStory(): StoryFn<StoryFnAngularReturnType> {
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

  private twoGamesWithLongNames(): StoryFn<StoryFnAngularReturnType> {
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

  private twoGamesAndUnknownWinnerStates(): StoryFn<StoryFnAngularReturnType> {
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

  private threeGames(): StoryFn<StoryFnAngularReturnType> {
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

  private manyGames(): StoryFn<StoryFnAngularReturnType> {
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

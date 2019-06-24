import {IApi, IGetStory} from '@storybook/angular';
import {CompleteStory} from '../intefaces/complete-story.interface';
import {GameTableComponent} from '../app/modules/game/components/game/game-table/game-table.component';
import {of} from 'rxjs';
import {MatTableModule} from '@angular/material';
import {CustomTranslateModule} from '../app/modules/custom-translate.module';
import {TranslateDirective} from '../app/modules/shared/directives/translate.directive';


export class GameTableStoryFactory {
  private component = GameTableComponent;
  private readonly displayedColumns: string[] = ['white', 'winner', 'black'];
  private stories: CompleteStory[] = [];

  constructor(private iApi: IApi) {

  }

  public create(): void {
    this.createInputs();
    this.appendStories();
  }

  private appendStories(): void {
    this.stories.forEach((story: CompleteStory) => this.iApi.add(story.name, story.story));
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

  private zeroGameStory(): IGetStory {
    return () => ({
      component: this.component,
      props: {
        games$: of([]),
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          CustomTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private twoGamesStory(): IGetStory {
    return () => ({
      component: GameTableComponent,
      props: {
        games$: [
          {white: 'user 1', black: 'user 2', winner: 'white'},
          {white: 'user 1', black: 'user 2', winner: 'black'},
        ],
        displayedColumns: this.displayedColumns,
      },
      moduleMetadata: {
        imports: [
          MatTableModule,
          CustomTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private twoGamesWithLongNames(): IGetStory {
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
          CustomTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private twoGamesAndUnknownWinnerStates(): IGetStory {
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
          CustomTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private threeGames(): IGetStory {
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
          CustomTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }

  private manyGames(): IGetStory {
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
          CustomTranslateModule,
        ],
        declarations: [TranslateDirective],
      },
    });
  }
}

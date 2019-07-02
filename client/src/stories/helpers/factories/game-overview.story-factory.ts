import {IApi, IGetStory} from '@storybook/angular';
import {CompleteStory} from '../intefaces/complete-story.interface';
import {GameTableComponent} from '../../../app/modules/game/components/game/game-table/game-table.component';
import {of} from 'rxjs';
import {MatTableModule} from '@angular/material';
import {CustomTranslateModule} from '../../../app/modules/custom-translate.module';
import {TranslateDirective} from '../../../app/modules/shared/directives/translate.directive';
import {OverviewComponent} from '../../../app/modules/game/components/game/overview/overview.component';
import {Actions} from '../../../app/modules/shared/static-files/enums';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GameTableLoaderComponent} from '../../../app/modules/game/components/game/overview/game-table-loader/game-table-loader.component';
import {TableActionComponent} from '../../../app/modules/game/components/game/overview/table-action/table-action.component';
import {BootstrapColumnDirective} from '../../../app/modules/shared/directives/bootstrap-column.directive';
import {BootstrapRowDirective} from '../../../app/modules/shared/directives/bootstrap-row.directive';
import {IconComponent} from '../../../app/modules/shared/components/icon/icon.component';


export class GameOverviewStoryFactory {
  private component = OverviewComponent;
  private readonly displayedColumns: string[] = ['white', 'winner', 'black'];
  private stories: CompleteStory[] = [];
  private actions: Actions[] = [Actions.ADD];

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
      name: '10 games',
      story: this.tenGameStory(),
    });
  }

  private tenGameStory(): IGetStory {
    return () => ({
        component: this.component,
        props: {
          actions: this.actions,
          displayedColumns: this.displayedColumns,
          loading: false,
          games$: of([
            {white: 'user 1', black: 'user 2', winner: 'white'},
            {white: 'user 1', black: 'user 2', winner: 'black'},
            {white: 'user 1', black: 'user 2', winner: 'white'},
            {white: 'user 1', black: 'user 2', winner: 'black'},
            {white: 'user 1', black: 'user 2', winner: 'white'},
            {white: 'user 1', black: 'user 2', winner: 'black'},
            {white: 'user 1', black: 'user 2', winner: 'white'},
            {white: 'user 1', black: 'user 2', winner: 'black'},
            {white: 'user 1', black: 'user 2', winner: 'white'},
            {white: 'user 1', black: 'user 2', winner: 'black'},
          ]),
        },
        moduleMetadata: {
          imports: [
            MatTableModule,
            CustomTranslateModule,
            NgxSkeletonLoaderModule,
            FontAwesomeModule,
          ],
          declarations: [
            TranslateDirective,
            GameTableLoaderComponent,
            GameTableComponent,
            TableActionComponent,
            BootstrapColumnDirective,
            BootstrapRowDirective,
            IconComponent,
          ],
        },
      }
    );
  }
}

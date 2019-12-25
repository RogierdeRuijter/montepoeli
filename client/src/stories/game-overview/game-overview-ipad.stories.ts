import {storiesOf} from '@storybook/angular';
import {GameOverviewStoryFactory} from '../helpers/factories/game-overview.story-factory';

const storyDefinition = storiesOf('OverviewComponent/iPad', module)
  // .addParameters({ viewport: { defaultViewport: 'tablet' }})

new GameOverviewStoryFactory(storyDefinition).create();

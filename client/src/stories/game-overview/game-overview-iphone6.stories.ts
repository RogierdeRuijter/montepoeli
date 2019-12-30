import {storiesOf} from '@storybook/angular';
import {GameOverviewStoryFactory} from '../helpers/factories/game-overview.story-factory';

const storyDefinition = storiesOf('OverviewComponent/iphone6', module)
  // .addParameters({viewport: {defaultViewport: 'iphone6'}});

new GameOverviewStoryFactory(storyDefinition).create();

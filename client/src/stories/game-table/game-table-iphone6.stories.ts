import {storiesOf} from '@storybook/angular';
import {GameTableStoryFactory} from '../helpers/factories/game-table.story-factory';

const storyDefinition = storiesOf('GameTable/Iphone6', module)
  .addParameters({viewport: {
    defaultViewport: 'iphonex'
  }
});

new GameTableStoryFactory(storyDefinition).create();


import {storiesOf} from '@storybook/angular';
import {GameTableStoryFactory} from './factories/game-table.story-factory';

const storyDefinition = storiesOf('GameTable', module);

new GameTableStoryFactory(storyDefinition).create();


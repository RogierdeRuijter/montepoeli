import {storiesOf} from '@storybook/angular';
import {GameOverviewStoryFactory} from '../helpers/factories/game-overview.story-factory';

const storyDefinition = storiesOf('OverviewComponent/regular', module);

new GameOverviewStoryFactory(storyDefinition).create();

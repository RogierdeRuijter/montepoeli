import {addDecorator, configure} from '@storybook/angular';
import {initScreenshot} from 'storybook-chrome-screenshot';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(initScreenshot());

configure(loadStories, module);

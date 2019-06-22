import {configure} from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addParameters({ viewport: { viewports: newViewports } });

configure(loadStories, module);

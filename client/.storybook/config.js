import {configure} from '@storybook/angular';
import { addParameters } from "@storybook/angular";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
addParameters({ 
    viewport: { 
        viewports: {
            ...INITIAL_VIEWPORTS
        }
    }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import {configure} from '@storybook/angular';
import { addParameters } from "@storybook/angular";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({ 
    viewport: { 
        viewports: {
            ...INITIAL_VIEWPORTS
        }
    }
});


configure(require.context("../src/stories", true, /\.stories\.ts$/), module);
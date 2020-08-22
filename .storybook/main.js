// import { addParameters } from "@storybook/angular";
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

module.exports = {
    stories: ['../apps/client/src/**/*.stories.ts'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes'],
  };
  
// addParameters({ 
//     viewport: { 
//         viewports: {
//             ...INITIAL_VIEWPORTS
//         }
//     }
// });
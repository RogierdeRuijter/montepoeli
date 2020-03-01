import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';

registerRequireContextHook();
initStoryshots({
    test: renderOnly
});
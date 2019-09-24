import {StoryFn} from '@storybook/addons';

export interface CompleteStory {
  name: string;
  story: StoryFn<unknown>;
}

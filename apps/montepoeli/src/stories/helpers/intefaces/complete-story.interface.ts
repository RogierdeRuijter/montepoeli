import { StoryFn } from "@storybook/addons";
import { StoryFnAngularReturnType } from "@storybook/angular/dist/client/preview/types";

export interface CompleteStory {
  name: string;
  story: StoryFn<StoryFnAngularReturnType>;
}

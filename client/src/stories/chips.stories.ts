import { storiesOf } from '@storybook/angular';
import { MatChipsModule } from '@angular/material/chips';
import { StorybookTranslateModule } from './storybook-translate.module';
import { ChipsComponent } from 'src/app/shared/modules/chips/components/chips/chips.component';

export default {
    title: 'Chips',
  };
  
export const listAllDescriptions = () => ({
    template: 
    `   <div class="light-theme">
            <app-chips [descriptions]="descriptions"></app-chips>
        </div>
    `,
    props: {
        descriptions: ['Rogier', 'Jeroen', 'Owen']
    },
    moduleMetadata: moduleMeta
});

export const listAllDescriptionsWithOwenSelected = () => ({
    template: 
    `   <div class="light-theme">
            <app-chips></app-chips>
        </div>
    `,
    props: {
        chips: [
            {description: 'Rogier', selected: false},
            {description: 'Jeroen', selected: false}, 
            {description: 'Owen', selected: true}
        ],
    },
    moduleMetadata: moduleMeta
});

export const ListDarkTheme = () => ({
    template: 
    `   <div class="dark-theme">
            <app-chips></app-chips>
        </div>
    `,
    props: {

    },
    moduleMetadata: moduleMeta
});

  const moduleMeta = {
    imports: [
        MatChipsModule,
        StorybookTranslateModule
    ],
    declarations: [
        ChipsComponent
    ],
    providers: [],
  }

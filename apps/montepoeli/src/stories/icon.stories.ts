import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { IconComponent } from 'src/app/shared/modules/icon/components/icon/icon.component';
import { Icons, IconSize } from 'src/app/shared/static-files/enums';
import { TranslateDirective } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

export default {
    title: 'Icons',
  };
  
export const checkNoSize = () => ({
    component: IconComponent,
    props: {
        icon: Icons.CHECK
    },
    moduleMetadata: moduleMeta
  });

export const checkSmall = () => ({
    component: IconComponent,
    props: {
        icon: Icons.CHECK,
        iconSize: IconSize.SMALL
    },
    moduleMetadata: moduleMeta
  });

export const checkMedium = () => ({
    component: IconComponent,
    props: {
        icon: Icons.CHECK,
        iconSize: IconSize.MEDIUM
    },
    moduleMetadata: moduleMeta
  });

export const checkLarge = () => ({
    component: IconComponent,
    props: {
        icon: Icons.CHECK,
        iconSize: IconSize.LARGE
    },
    moduleMetadata: moduleMeta
  });

export const crossMedium = () => ({
    component: IconComponent,
    props: {
        icon: Icons.CROSS,
        iconSize: IconSize.MEDIUM
    },
    moduleMetadata: moduleMeta
  });

export const crossLarge = () => ({
    component: IconComponent,
    props: {
        icon: Icons.CROSS,
        iconSize: IconSize.LARGE
    },
    moduleMetadata: moduleMeta
  });

export const plusNoSizeSpecified = () => ({
    component: IconComponent,
    props: {
        icon: Icons.PLUS
    },
    moduleMetadata: moduleMeta
  });

const moduleMeta = {
    imports: [ FontAwesomeModule, MatIconModule ],
    declarations: [ TranslateDirective ]
}

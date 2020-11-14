import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from '../app/shared/modules/icon/components/icon/icon.component';
import { Icons, IconSize } from '../app/shared/static-files/enums';
import { TranslateDirective } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Icons',
};

export const checkNoSize = () => ({
  component: IconComponent,
  props: {
    icon: Icons.check,
  },
  moduleMetadata: moduleMeta,
});

export const checkSmall = () => ({
  component: IconComponent,
  props: {
    icon: Icons.check,
    iconSize: IconSize.small,
  },
  moduleMetadata: moduleMeta,
});

export const checkMedium = () => ({
  component: IconComponent,
  props: {
    icon: Icons.check,
    iconSize: IconSize.medium,
  },
  moduleMetadata: moduleMeta,
});

export const checkLarge = () => ({
  component: IconComponent,
  props: {
    icon: Icons.check,
    iconSize: IconSize.large,
  },
  moduleMetadata: moduleMeta,
});

export const crossMedium = () => ({
  component: IconComponent,
  props: {
    icon: Icons.cross,
    iconSize: IconSize.medium,
  },
  moduleMetadata: moduleMeta,
});

export const crossLarge = () => ({
  component: IconComponent,
  props: {
    icon: Icons.cross,
    iconSize: IconSize.large,
  },
  moduleMetadata: moduleMeta,
});

export const plusNoSizeSpecified = () => ({
  component: IconComponent,
  props: {
    icon: Icons.plus,
  },
  moduleMetadata: moduleMeta,
});

const moduleMeta = {
  imports: [FontAwesomeModule, MatIconModule],
  declarations: [TranslateDirective],
};

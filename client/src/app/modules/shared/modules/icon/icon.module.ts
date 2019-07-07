import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconModule {
}

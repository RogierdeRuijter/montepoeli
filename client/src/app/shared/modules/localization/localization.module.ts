import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
  ],
  imports: [
    CommonModule,
  ],
})
export class LocalizationModule {
}

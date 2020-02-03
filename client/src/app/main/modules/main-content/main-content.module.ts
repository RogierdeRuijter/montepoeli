import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MainContentRoutingModule } from './main-content-routing.module';
import { MobileContentModule } from './modules/mobile-content/mobile-content.module';
import { LargerScreenContentModule } from './modules/larger-screen-content/larger-screen-content.module';

@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule,
    MobileContentModule,
    LargerScreenContentModule,
  ],
})
export class MainContentModule { }

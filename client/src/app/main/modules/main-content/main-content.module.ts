import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { MainContentRoutingModule } from './main-content-routing.module';

@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule
  ],
})
export class MainContentModule { }

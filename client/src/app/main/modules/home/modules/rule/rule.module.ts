import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RuleComponent} from './rule.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [RuleComponent],
  exports: [RuleComponent],
  imports: [
    CommonModule,
    MatListModule,
  ],
})
export class RuleModule { }

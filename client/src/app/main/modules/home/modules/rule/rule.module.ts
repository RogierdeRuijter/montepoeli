import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RuleComponent} from './components/rule/rule.component';
import {MatListModule} from '@angular/material/list';

// TODO: find out if this is still needed if we lazy load the component
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
  ],
})
export class RuleModule { }

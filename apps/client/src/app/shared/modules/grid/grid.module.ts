import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridColumnDirective } from './directives/grid-column.directive';
import { GridRowDirective } from './directives/grid-row.directive';
import { PositionDirective } from './directives/position.directive';

@NgModule({
  declarations: [GridColumnDirective, GridRowDirective, PositionDirective],
  exports: [GridColumnDirective, GridRowDirective, PositionDirective],
  imports: [CommonModule],
})
export class GridModule {}

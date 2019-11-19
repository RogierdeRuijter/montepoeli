import {Directive, ElementRef, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {GridSizes, Positions} from '../static-files/enums';
import {GridRowDirective} from './grid-row.directive';
import {GridService} from '../services/grid/grid.service';

@Directive({
  selector: '[appGridPosition]',
})
export class GridPositionDirective implements OnInit {

  @Input('appGridPosition')
  public positions: Positions[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              @Optional() private bootstrapRowDirective: GridRowDirective,
              private gridService: GridService) {
  }

  public ngOnInit(): void {
    if (!this.bootstrapRowDirective) {
      throw new Error('bootstrapRowDirective should be defined');
    }

    const gridSizes: GridSizes[] = this.bootstrapRowDirective.gridSizes;

    if (gridSizes.length !== this.positions.length) {
      throw new Error('gridSizes and amountOfColumns should have the same size');
    }

    gridSizes.forEach((gridSize: GridSizes, index: number) => {
      let bootstrapGridClass = '';

      const gridPrefix = this.gridService.getBootstrapClassFor(gridSize);
      const position = this.positions[index];
      bootstrapGridClass += gridPrefix + '-' + 'visible' + position;

      if (position === Positions.FIXED_MIDDLE) {
        // TODO: only show these style one the current grid size
        this.addStyleToElement('position', 'fixed');
        this.addStyleToElement('bottom', '35%');
      }
    });
  }

  private addStyleToElement(field: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, field, value);
  }


}

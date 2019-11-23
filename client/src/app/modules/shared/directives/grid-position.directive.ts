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
              @Optional() private bootstrapRowDirective: GridRowDirective) {
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
      const position = this.positions[index];

      if (position === Positions.FIXED_MIDDLE) {
        this.addCssVisableClass(gridSize);

        this.addStyleToElement('position', 'absolute');
        this.addStyleToElement('bottom', '35%');
        this.addStyleToElement('right', '0%');
      }
    });
  }

  private addStyleToElement(field: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, field, value);
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }

  private addCssVisableClass(gridSize: GridSizes): void {
    switch (gridSize) {
      case GridSizes.EXTRA_SMALL:
        this.addClassToElement('.d-block');
        this.addClassToElement('.d-sm-none');
        break;
      case GridSizes.SMALL:
        this.addClassToElement('.d-none');
        this.addClassToElement('.d-sm-block');
        this.addClassToElement('.d-md-none');
        break;
      case GridSizes.MEDIUM:
        this.addClassToElement('.d-none');
        this.addClassToElement('.d-md-block');
        this.addClassToElement('.d-lg-none');
        break;
      case GridSizes.LARGE:
        this.addClassToElement('.d-none');
        this.addClassToElement('.d-lg-block');
        this.addClassToElement('.d-xl-none');
        break;
    }
  }


}

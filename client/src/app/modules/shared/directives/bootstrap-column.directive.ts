import {Directive, ElementRef, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {BootstrapRowDirective} from './bootstrap-row.directive';
import {GridSizes} from '../static-files/enums';

@Directive({
  selector: '[appBootstrapColumn]',
})
export class BootstrapColumnDirective implements OnInit {

  @Input('appBootstrapColumn')
  public amountOfColumns: number[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              @Optional() private bootstrapRowDirective: BootstrapRowDirective) {
  }

  public ngOnInit(): void {
    if (!this.bootstrapRowDirective) {
      throw new Error('bootstrapRowDirective should be defined');
    }

    const gridSizes: GridSizes[] = this.bootstrapRowDirective.gridSizes;

    if (gridSizes.length !== this.amountOfColumns.length) {
      throw new Error('gridSizes and amountOfColumns should have the same size');
    }


    gridSizes.forEach((gridSize: GridSizes, index: number) => {
      let bootstrapGridClass = '';

      const gridPrefix = this.getBootstrapClassFor(gridSize);
      bootstrapGridClass += gridPrefix + '-' + this.amountOfColumns[index];

      this.renderer.addClass(this.elementRef.nativeElement, bootstrapGridClass);
    });
  }

  private getBootstrapClassFor(gridSize: GridSizes): string {
    switch (gridSize) {
      case GridSizes.EXTRA_SMALL:
        return 'col-xs';
      case GridSizes.SMALL:
        return 'col-sm';
      case GridSizes.MEDIUM:
        return 'col-md';
      case GridSizes.LARGE:
        return 'col-lg';
    }
  }
}

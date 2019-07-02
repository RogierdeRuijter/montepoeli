import {Directive, ElementRef, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {BootstrapRowDirective} from './bootstrap-row.directive';
import {Alignments, GridSizes} from '../static-files/enums';
import {UtilService} from '../services/util/util.service';

@Directive({
  selector: '[appBootstrapColumn]',
})
export class BootstrapColumnDirective implements OnInit {

  @Input('appBootstrapColumn')
  public amountOfColumns: number[];

  @Input()
  public alignmentCol: Alignments;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              @Optional() private bootstrapRowDirective: BootstrapRowDirective,
              private utilService: UtilService) {
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

      this.addClassToElement(bootstrapGridClass);
    });

    if (!this.utilService.isNullOrUndefined(this.alignmentCol)) {
      this.addStyleToElement('text-align', 'center');
    }
  }

  private getBootstrapClassFor(gridSize: GridSizes): string {
    switch (gridSize) {
      case GridSizes.EXTRA_SMALL:
        return 'col';
      case GridSizes.SMALL:
        return 'col-sm';
      case GridSizes.MEDIUM:
        return 'col-md';
      case GridSizes.LARGE:
        return 'col-lg';
    }
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }

  private addStyleToElement(field: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, field, value);
  }
}

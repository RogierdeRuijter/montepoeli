import {Directive, ElementRef, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {GridRowDirective} from './grid-row.directive';
import {Alignments, GridSizes} from '../static-files/enums';
import {UtilService} from '../services/util/util.service';
import {GridService} from '../services/grid/grid.service';

@Directive({
  selector: '[appGridColumn]',
})
export class GridColumnDirective implements OnInit {

  @Input('appGridColumn')
  public amountOfColumns: number[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              @Optional() private bootstrapRowDirective: GridRowDirective,
              private utilService: UtilService,
              private gridService: GridService) {
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

      const gridPrefix = this.gridService.getBootstrapClassFor(gridSize);
      bootstrapGridClass += gridPrefix + '-' + this.amountOfColumns[index];

      this.addClassToElement(bootstrapGridClass);
    });
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }
}

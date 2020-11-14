import { Directive, ElementRef, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { GridRowDirective } from './grid-row.directive';
import { Alignments, GridSizes } from '../../../static-files/enums';
import { UtilService } from '../../../services/util/util.service';
import { UnknownCaseException } from '../../../exceptions/UnknownCaseException';

@Directive({
  selector: '[appGridColumn]',
})
export class GridColumnDirective implements OnInit {
  @Input('appGridColumn')
  public amountOfColumns: number[];

  @Input()
  public alignmentCol: Alignments;

  @Input()
  public offsets: number[];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Optional() private bootstrapRowDirective: GridRowDirective,
    private utilService: UtilService
  ) {}

  public ngOnInit(): void {
    if (!this.bootstrapRowDirective) {
      throw new Error('bootstrapRowDirective should be defined');
    }

    const gridSizes: GridSizes[] = this.bootstrapRowDirective.gridSizes;

    if (gridSizes.length !== this.amountOfColumns.length) {
      throw new Error('gridSizes and amountOfColumns should have the same size');
    }

    if (!this.utilService.isNullOrUndefined(this.offsets) && this.amountOfColumns.length !== this.offsets.length) {
      throw new Error('collumns and offsets should have the same size');
    }

    gridSizes.forEach((gridSize: GridSizes, index: number) => {
      this.addGridClass(gridSize, index);
      if (!this.utilService.isNullOrUndefined(this.offsets)) {
        this.addOffsetClass(gridSize, index);
      }
    });

    if (!this.utilService.isNullOrUndefined(this.alignmentCol)) {
      if (this.alignmentCol === Alignments.center) {
        // TODO: move to position directive
        this.addStyleToElement('text-align', 'center');
      } else {
        throw new Error('unkown');
      }
    }
  }

  private addGridClass(gridSize: GridSizes, index: number): void {
    let bootstrapGridClass = '';

    const gridPrefix = this.getBootstrapClassFor(gridSize);
    bootstrapGridClass += 'col' + gridPrefix + '-' + this.amountOfColumns[index];

    this.addClassToElement(bootstrapGridClass);
  }

  private addOffsetClass(gridSize: GridSizes, index: number): void {
    let offsetClass = 'offset';

    const gridPrefix = this.getBootstrapClassFor(gridSize);
    offsetClass += gridPrefix + '-' + this.offsets[index];

    this.addClassToElement(offsetClass);
  }

  private getBootstrapClassFor(gridSize: GridSizes): string {
    switch (gridSize) {
      case GridSizes.extraSmall:
        return '';
      case GridSizes.small:
        return '-sm';
      case GridSizes.medium:
        return '-md';
      case GridSizes.large:
        return '-lg';
      case GridSizes.all:
        return '';
      default:
        throw new UnknownCaseException('unkown');
    }
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }

  private addStyleToElement(field: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, field, value);
  }
}

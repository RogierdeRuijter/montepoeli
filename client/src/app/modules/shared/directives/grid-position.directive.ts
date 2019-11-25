import {Directive, ElementRef, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {GridSizes, Positions} from '../static-files/enums';
import {GridRowDirective} from './grid-row.directive';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map, tap } from 'rxjs/operators';
import { GridService } from '../services/grid/grid.service';

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

    this.gridService.gridChangeObservable()
    .pipe(
      tap(() => this.removeActiveStyles())
    ).subscribe((activeGridSize: GridSizes) => {
      gridSizes.forEach((gridSize: GridSizes, index: number) => {
        const position = this.positions[index];

        if (position === Positions.FIXED_MIDDLE && activeGridSize === gridSize) {
          this.placeElementMiddleRightScreen();
        }
      });
    });
  }
  // This solution does not really scale
  // Find a different one if it becomes a problem
  private removeActiveStyles(): void {
    this.removeStyleOnElement('position');
    this.removeStyleOnElement('bottom');
    this.removeStyleOnElement('right');
  }

  private removeStyleOnElement(style: string): void {
    this.renderer.removeStyle(this.elementRef.nativeElement, style);
  }

  private placeElementMiddleRightScreen(): void {
    this.addStyleToElement('position', 'absolute');
    this.addStyleToElement('bottom', '35%');
    this.addStyleToElement('right', '0%');
  }

  private addStyleToElement(field: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, field, value);
  }
}

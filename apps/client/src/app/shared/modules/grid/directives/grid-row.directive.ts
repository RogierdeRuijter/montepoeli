import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Alignments, Directions, GridSizes } from '../../../static-files/enums';
import { UtilService } from '../../../services/util/util.service';
import { ShouldBeDefinedException } from '../../../exceptions/ShouldBeDefinedException';

@Directive({
  selector: '[appGridRow]',
})
export class GridRowDirective implements OnInit {
  @Input('appGridRow')
  public gridSizes: GridSizes[];

  @Input()
  public alignment: Alignments | Alignments[];

  @Input()
  public direction: Directions = Directions.row;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private utilService: UtilService) {}

  public ngOnInit(): void {
    if (this.itDoesNotHaveAllNecessaryGridSizes()) {
      throw new ShouldBeDefinedException('All necessary grid sizes');
    }

    if (this.direction === Directions.row) {
      this.addClassToElement('row');
    } else if (this.direction === Directions.column) {
      this.addClassToElement('d-flex');
      this.addClassToElement('flex-column');
    }

    if (!this.utilService.isNullOrUndefined(this.alignment)) {
      if (this.alignment instanceof Array) {
        this.alignment.forEach((align) => this.addAlignment(align));
      } else {
        this.addAlignment(this.alignment);
      }
    }
  }

  private itDoesNotHaveAllNecessaryGridSizes(): boolean {
    return (
      !(
        this.gridSizes.includes(GridSizes.extraSmall) &&
        this.gridSizes.includes(GridSizes.small) &&
        this.gridSizes.includes(GridSizes.medium) &&
        this.gridSizes.includes(GridSizes.large)
      ) && !this.gridSizes.includes(GridSizes.all)
    );
  }

  private addAlignment(alignment: Alignments): void {
    if (alignment === Alignments.right) {
      this.addClassToElement('justify-content-end');
    }

    if (alignment === Alignments.center) {
      this.addClassToElement('align-items-center');
    }

    if (alignment === Alignments.vertical) {
      this.addClassToElement('d-flex');
      this.addClassToElement('flex-column');
    }

    if (alignment === Alignments.baseline) {
      this.addClassToElement('d-flex');
      this.addClassToElement('align-items-baseline');
    }

    if (alignment === Alignments.end) {
      this.addClassToElement('d-flex');
      this.addClassToElement('align-items-end');
    }
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }
}

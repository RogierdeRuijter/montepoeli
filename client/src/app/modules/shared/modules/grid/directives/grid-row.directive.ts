import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Alignments, Directions, GridSizes} from '../../../static-files/enums';
import {UtilService} from '../../../services/util/util.service';
import {ShouldBeDefinedException} from '../../../exceptions/ShouldBeDefinedException';

@Directive({
  selector: '[appGridRow]',
})
export class GridRowDirective implements OnInit {

  @Input('appGridRow')
  public gridSizes: GridSizes[];

  @Input()
  public alignment: Alignments | Alignments[];

  @Input()
  public direction: Directions = Directions.ROW;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private utilService: UtilService) {
  }

  public ngOnInit(): void {
    if (this.itDoesNotHaveAllNecessaryGridSizes()) {
      throw new ShouldBeDefinedException('All necessary grid sizes');
    }

    if (this.direction === Directions.ROW) {
      this.addClassToElement('row');
    } else if (this.direction === Directions.COLUMN) {
      this.addClassToElement('d-flex');
      this.addClassToElement('flex-column');
    }

    if (!this.utilService.isNullOrUndefined(this.alignment)) {
      if (this.alignment instanceof Array) {
        this.alignment.forEach(align => this.addAlignment(align));
      } else {
        this.addAlignment(this.alignment);
      }
    }
  }

  private itDoesNotHaveAllNecessaryGridSizes(): boolean {
    return !(
      this.gridSizes.includes(GridSizes.EXTRA_SMALL) &&
      this.gridSizes.includes(GridSizes.SMALL) &&
      this.gridSizes.includes(GridSizes.MEDIUM) &&
      this.gridSizes.includes(GridSizes.LARGE)
    ) && !this.gridSizes.includes(GridSizes.ALL);
  }

  private addAlignment(alignment: Alignments): void {
    if (alignment === Alignments.RIGHT) {
      this.addClassToElement('justify-content-end');
    }

    if (alignment === Alignments.CENTER) {
      this.addClassToElement('align-items-center');
    }

    if (alignment === Alignments.VERTICAL) {
      this.addClassToElement('d-flex');
      this.addClassToElement('flex-column');
    }

    if (alignment === Alignments.BASELINE) {
      this.addClassToElement('d-flex');
      this.addClassToElement('align-items-baseline');
    }

    if (alignment === Alignments.END) {
      this.addClassToElement('d-flex');
      this.addClassToElement('align-items-end');
    }
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }

}

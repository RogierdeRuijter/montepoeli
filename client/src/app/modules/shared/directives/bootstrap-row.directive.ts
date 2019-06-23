import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Alignments, GridSizes} from '../static-files/enums';
import {UtilService} from '../services/util/util.service';
import {ShouldBeDefinedException} from '../exceptions/ShouldBeDefinedException';

@Directive({
  selector: '[appBootstrapRow]',
})
export class BootstrapRowDirective implements OnInit {

  @Input('appBootstrapRow')
  public gridSizes: GridSizes[];

  @Input()
  public alignment: Alignments | Alignments[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private utilService: UtilService) {
  }

  public ngOnInit(): void {
    if (this.itDoesNotAllNecessaryGridSizes()) {
      throw new ShouldBeDefinedException('All necessary grid sizes');
    }

    this.addClassToElement('row');

    if (!this.utilService.isNullOrUndefined(this.alignment)) {
      if (this.alignment instanceof Array) {
        this.alignment.forEach(align => this.addAlignment(align));
      } else {
        this.addAlignment(this.alignment);
      }
    }
  }

  private itDoesNotAllNecessaryGridSizes(): boolean {
    return !(this.gridSizes.includes(GridSizes.EXTRA_SMALL)
      && this.gridSizes.includes(GridSizes.SMALL)
      && this.gridSizes.includes(GridSizes.MEDIUM)
      && this.gridSizes.includes(GridSizes.LARGE));
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
  }

  private addClassToElement(cssClass: string): void {
    this.renderer.addClass(this.elementRef.nativeElement, cssClass);
  }

}

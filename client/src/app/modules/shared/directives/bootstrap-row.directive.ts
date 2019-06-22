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
  public alignment: Alignments;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private utilService: UtilService) {
  }

  public ngOnInit(): void {
    if (this.itDoesNotAllNecessaryGridSizes()) {
      throw new ShouldBeDefinedException('All necessary grid sizes');
    }

    this.renderer.addClass(this.elementRef.nativeElement, 'row');

    if (!this.utilService.isNullOrUndefined(this.alignment)) {
      this.renderer.addClass(this.elementRef.nativeElement, this.addAlignment());
    }
  }

  private itDoesNotAllNecessaryGridSizes(): boolean {
    return !(this.gridSizes.includes(GridSizes.EXTRA_SMALL)
      && this.gridSizes.includes(GridSizes.SMALL)
      && this.gridSizes.includes(GridSizes.MEDIUM)
      && this.gridSizes.includes(GridSizes.LARGE));
  }

  private addAlignment(): string {
    if (this.alignment === Alignments.RIGHT) {
      return 'justify-content-end';
    }
  }

}

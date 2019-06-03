import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {GridSizes} from '../static-files/enums';

@Directive({
  selector: '[appBootstrapRow]',
})
export class BootstrapRowDirective implements OnInit {

  @Input('appBootstrapRow')
  public gridSizes: GridSizes[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'row');
  }

}

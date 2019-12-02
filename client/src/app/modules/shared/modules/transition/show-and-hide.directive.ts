import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShowAndHide]'
})
export class ShowAndHideDirective implements OnChanges {

  @Input('appShowAndHide')
  public show: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  public ngOnChanges(): void {
    if (this.show === true) {
      // TODO: clean this up more
      this.renderer.removeStyle(this.elementRef.nativeElement, 'pointer-events');

      this.addShowCss();
    } else if (this.show === false) {
      this.addHideCss();
    }
  }

  private addShowCss(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, '-moz-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, '-o-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'opacity .3s ease-in-out');
  }

  private addHideCss(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'pointer-events', 'none');

    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, '-moz-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, '-ms-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, '-o-transition', 'opacity .3s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'opacity .3s ease-in-out');
  }
}

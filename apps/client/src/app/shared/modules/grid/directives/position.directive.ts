import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Positions } from '../../../static-files/enums';

@Directive({
  selector: '[appPosition]',
})
export class PositionDirective implements OnInit {
  @Input('appPosition')
  public position: Positions;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    if (this.position === Positions.fixedMiddle) {
      this.addStyleToElement('position', 'fixed');
      this.addStyleToElement('bottom', '35%');
    }
  }

  private addStyleToElement(field: string, value: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, field, value);
  }
}

import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  constructor(private renderer: Renderer2) {}

  public addClassToElement(cssClass: string, elementRef: ElementRef): void {
    this.renderer.addClass(elementRef.nativeElement, cssClass);
  }

  public addStyleToElement(field: string, value: string, elementRef: ElementRef): void {
    this.renderer.setStyle(elementRef.nativeElement, field, value);
  }
}

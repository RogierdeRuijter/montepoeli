import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, retry, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective implements OnInit {
  @Input('appTranslate')
  public key: string;

  @Input()
  public property = 'innerHTML';

  public constructor(
    private translateService: TranslateService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    this.translateService
      .get(this.key)
      .pipe(debounceTime(200), retry(5))
      .subscribe((translation) => this.setProperty(translation));

    this.translateService.onLangChange
      .pipe(switchMap(() => this.translateService.get(this.key).pipe(debounceTime(200), retry(5))))
      .subscribe((translation) => this.setProperty(translation));
  }

  private setProperty(translation: string): void {
    this.renderer.setProperty(this.elementRef.nativeElement, this.property, translation);
  }
}

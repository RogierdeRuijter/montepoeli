import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslateUtilService} from '../services/translate-util.service';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective implements OnInit {

  @Input('appTranslate')
  public key: string;

  @Input()
  public properties: string | string[] = 'innerHTML';

  public constructor(private translateService: TranslateService,
                     private elementRef: ElementRef,
                     private renderer: Renderer2,
                     private translateUtilService: TranslateUtilService) {
  }

  public ngOnInit(): void {
    if (this.translateUtilService.isLanguageKey(this.key)) {
      this.translateService.get(this.key)
        .subscribe((translation) => this.setProperty(translation));
    } else {
      this.setProperty(this.key);
    }
  }

  private setProperty(translation: string): void {
    this.renderer.setProperty(this.elementRef.nativeElement, this.properties as string, translation);
  }

}

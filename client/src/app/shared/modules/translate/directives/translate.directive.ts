import {Directive, ElementRef, Input, OnInit, Renderer2, ChangeDetectorRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {debounceTime, retry} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective implements OnInit {

  @Input('appTranslate')
  public key: string;

  @Input()
  public property = 'innerHTML';

  private test: BehaviorSubject<any> = new BehaviorSubject(null);

  public constructor(private translateService: TranslateService,
                     private elementRef: ElementRef,
                     private renderer: Renderer2,
                     private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    // this.test.subscribe(() => {
    //   this.translateService.get(this.key)
    //     .pipe(
    //       debounceTime(200),
    //       retry(5)
    //     ).subscribe((translation) => {
    //       console.log(translation);
    //       this.setProperty(translation);
    //       this.changeDetectorRef.detectChanges();
    //     });
    // });


    // console.log(this.key);
    // console.log(this.translateService.onLangChange);
      this.translateService.onLangChange.subscribe((lang) => {
        this.translateService.get(this.key)
        .pipe(
          debounceTime(200),
          retry(5)
        ).subscribe((translation) => {
          console.log(translation);
          this.setProperty(translation);
        });
        console.log('lang');
        console.log(this.key);
      });
  }

  private setProperty(translation: string): void {
    this.renderer.setProperty(this.elementRef.nativeElement, this.property, translation);
  }
}

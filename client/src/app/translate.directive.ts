import {Directive, Input, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Directive({
  selector: '[appTranslate]',
})
export class TranslateDirective implements OnInit {

  @Input()
  public key: string;

  public constructor(private translateService: TranslatePipe) {
  }

  public ngOnInit(): void {
    this.translateService.transform(this.key);
  }

}

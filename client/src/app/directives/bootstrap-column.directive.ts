import {Directive, Input, OnInit, Optional} from '@angular/core';
import {BootstrapRowDirective} from './bootstrap-row.directive';

@Directive({
  selector: '[appBootstrapColumn]',
})
export class BootstrapColumnDirective implements OnInit {

  @Input('appBootstrapColumn')
  public amountOfColumns: number[];

  constructor(@Optional() private bootstrapRowDirective: BootstrapRowDirective) {
  }

  ngOnInit(): void {
    console.log(this.bootstrapRowDirective);
    console.log('hello');
  }

}

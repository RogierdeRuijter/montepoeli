import {Directive, Input, OnInit} from '@angular/core';
import {GridSizes} from '../static-files/enums';

@Directive({
  selector: '[appBootstrapRow]',
})
export class BootstrapRowDirective implements OnInit {

  @Input('appBootstrapRow')
  public gridSizes: GridSizes[];

  constructor() {
  }

  ngOnInit(): void {
    console.log('init appBootstrapRow');
  }

}

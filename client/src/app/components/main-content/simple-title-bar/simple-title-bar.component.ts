import { Component, OnInit } from '@angular/core';
import { Icons, IconSize } from '../../../modules/shared/static-files/enums';

@Component({
  selector: 'app-simple-title-bar',
  templateUrl: './simple-title-bar.component.html',
  styleUrls: ['./simple-title-bar.component.scss']
})
export class SimpleTitleBarComponent implements OnInit {

  public Icons = Icons;
  public IconSize = IconSize;

  constructor() { }

  ngOnInit() {
  }

}

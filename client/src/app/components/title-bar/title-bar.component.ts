import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  public color: ThemePalette = 'primary';

  constructor() {
  }

  ngOnInit() {
  }

}

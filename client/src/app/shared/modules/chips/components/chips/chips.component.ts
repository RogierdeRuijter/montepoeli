import { Component, OnInit, Input } from '@angular/core';
import { MatChipListChange, MatChipSelectionChange } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  @Input()
  public descriptions: string[];

  public chips: any[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.descriptions?.forEach((description) => {
      this.chips.push({
        description,
        selected: false
      })
    });
  }

  public changeHandler(matChipSelectionChange: MatChipSelectionChange): void {
    console.log(matChipSelectionChange);
  }
}

import {Component, OnInit} from '@angular/core';
import {CatsService} from '../../services/cats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public cats: any[];

  constructor(private catsService: CatsService) {
  }

  public ngOnInit(): void {
    this.getCats();
  }

  public getCats(): void {
    this.catsService.getCats().subscribe((cats: any) => {
      this.cats = cats.body;
    });
  }

}

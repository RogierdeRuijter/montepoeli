import {Component, OnInit} from '@angular/core';
import {Game} from '../../interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public games: Game[];

  constructor(private gameService: GameService) {
  }

  public ngOnInit(): void {
    this.getGames();
  }

  public getGames(): void {
    this.gameService.getGames()
      .subscribe((gamesResponse: HttpResponse<Game[]>) => this.games = gamesResponse.body);
  }

}

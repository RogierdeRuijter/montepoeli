import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {HttpResponse} from '@angular/common/http';
import {Actions} from '../../static-files/enums';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public games$: BehaviorSubject<Game[]> = new BehaviorSubject(null);

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  constructor(private gameService: GameService) {
  }


  public ngOnInit(): void {

    this.getGames();
  }

  public getGames(): void {
    this.gameService.getGames()
      .subscribe((gamesResponse: HttpResponse<Game[]>) => this.games$.next(gamesResponse.body));
  }

  public handleActionEvent(action: Actions): void {
    const games: Game[] = this.games$.getValue();
    this.games$.next(games);
  }

  public ngOnDestroy(): void {
    this.games$.complete();
  }

}

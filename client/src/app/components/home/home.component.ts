import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../interfaces/game.interface';
import {GameService} from '../../services/game.service';
import {HttpResponse} from '@angular/common/http';
import {Actions} from '../../static-files/enums';
import {BehaviorSubject} from 'rxjs';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public games$: BehaviorSubject<Game[]> = new BehaviorSubject(null);

  public actions: Actions[] = [Actions.ADD];
  public disabled: boolean[];

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

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
    // const games: Game[] = this.games$.getValue();
    // this.games$.next(games);
    this.addDialog.openDialog();
  }

  public handleAddEvent(game: Game): void {
    console.log(game);
    const games: Game[] = this.games$.getValue();
    games.unshift(game);
    this.games$.next(games);
    // TODO: Save in the backend
  }

  public ngOnDestroy(): void {
    this.games$.complete();
  }

}

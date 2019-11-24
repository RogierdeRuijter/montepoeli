import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GameService } from '../modules/game/services/game.service';
import { Game } from '../../shared/interfaces/game.interface';

@Injectable({
    providedIn: 'root'
})
export class GameResolver implements Resolve<Observable<Game[]>> {
  constructor(private gameService: GameService) {}

  public resolve(): Observable<Game[]> {
    return this.gameService.getGames();
  }
}

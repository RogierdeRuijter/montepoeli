import {Injectable} from '@angular/core';

import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Game} from '../../../shared/interfaces/game.interface';
import {GameService} from '../modules/game/services/game.service';

@Injectable({
     providedIn: 'root'
})
export class GameResolver implements Resolve<Observable<Game[]>> {
  constructor(private gameService: GameService) {}

  public resolve(): Observable<Game[]> {
    return this.gameService.getAll();
  }
}
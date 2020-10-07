import { Store } from '../services/store';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root',
})
export class NewGameStore extends Store<Game> {}

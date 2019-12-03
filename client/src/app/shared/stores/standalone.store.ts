import {Store} from '../services/store';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StandaloneStore extends Store<boolean> {
}

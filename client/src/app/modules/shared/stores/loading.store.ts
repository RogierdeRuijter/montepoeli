import {Injectable} from '@angular/core';
import {Store} from '../services/store';

@Injectable({
  providedIn: 'root',
})
export class LoadingStore extends Store<boolean> {
}

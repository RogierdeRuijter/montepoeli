import {Injectable} from '@angular/core';
import {Store} from './store';

@Injectable({
  providedIn: 'root',
})
export class LoadingStore extends Store<boolean> {
}

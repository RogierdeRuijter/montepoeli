import {Injectable} from '@angular/core';
import {Store} from './store';
import {User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserStore extends Store<User[]> {
}

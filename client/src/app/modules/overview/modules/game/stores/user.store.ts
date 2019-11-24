import {Injectable} from '@angular/core';
import {Store} from '../../../../shared/services/store';
import {User} from '../../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserStore extends Store<User[]> {
}

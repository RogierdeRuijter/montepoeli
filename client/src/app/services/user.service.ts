import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../interfaces/user.interface';
import {CustomHttpService} from './custom-http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private customHttpService: CustomHttpService) {
  }

  // TODO: use this endpoint
  public getUsers(): Observable<User[]> {
    return this.customHttpService.get<User[]>(environment.BACKEND.URL.FULL + environment.BACKEND.ENTRY_POINTS.USERS);
  }
}

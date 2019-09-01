import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../../modules/shared/interfaces/user.interface';
import {CustomHttpService} from '../../modules/shared/services/custom-http/custom-http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private customHttpService: CustomHttpService) {
  }

  public getUsers(): Observable<User[]> {
    return this.customHttpService.get<User[]>(environment.backend.ENTRY_POINTS.USERS);
  }
}

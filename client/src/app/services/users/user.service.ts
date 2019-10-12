import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../modules/shared/interfaces/user.interface';
import {CustomHttpService} from '../../modules/shared/services/custom-http/custom-http.service';
import {Environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private environment = new Environment();

  constructor(private customHttpService: CustomHttpService) {
  }

  public getUsers(): Observable<User[]> {
    return this.customHttpService.get<User[]>(this.environment.backend.ENTRY_POINTS.USERS);
  }
}

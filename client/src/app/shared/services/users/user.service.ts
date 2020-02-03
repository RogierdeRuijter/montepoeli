import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { CustomHttpService } from '../../modules/http/services/custom-http/custom-http.service';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private environment = new Environment();

  constructor(private customHttpService: CustomHttpService) {
  }

  public getAll(): Observable<User[]> {
    return this.customHttpService.get<User[]>(this.environment.backend.ENTRY_POINTS.USERS);
  }
}

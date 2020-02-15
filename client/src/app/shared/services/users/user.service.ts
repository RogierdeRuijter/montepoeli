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
  private base = this.environment.backend.ENTRY_POINTS.USERS;

  constructor(private customHttpService: CustomHttpService) {
  }

  public getAll(): Observable<User[]> {
    return this.customHttpService.get<User[]>(this.environment.backend.ENTRY_POINTS.USERS);
  }

  public getCurrentUser(): Observable<User> {
    return this.customHttpService.get<User>(this.base + this.environment.backend.ENTRY_POINTS.CURRENT);
  }

  public setUserLanguagePreference(username: string, languagePreference: string): Observable<User> {
    const body: any = {
      username,
      languagePreference
    }
    
    return this.customHttpService.post(this.base + this.environment.backend.ENTRY_POINTS.UPDATE_LANGUAGE_PREFERENCE, body);
  }
}

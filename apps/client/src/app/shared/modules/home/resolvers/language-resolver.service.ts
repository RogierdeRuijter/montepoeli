import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LanguagePreferenceService } from '../../translate/services/language-preference.service';
import { Observable } from 'rxjs';
import { UserService } from '../../../services/users/user.service';
import { UserStoreService } from '../../user/store/user-store.service';
import { tap } from 'rxjs/operators';
import { User } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageResolverService implements Resolve<Observable<any>>{

  constructor(private languagePreferenceService: LanguagePreferenceService,
              private userStoreService: UserStoreService,
              private userService: UserService) { 
  }

  public resolve(): Observable<any> {
    return this.userService.getCurrentUser()
      .pipe(
        tap((user: User) => this.languagePreferenceService.setWithUser(user)),
        tap((user: User) => this.userStoreService.set(user))
      );
  }
}

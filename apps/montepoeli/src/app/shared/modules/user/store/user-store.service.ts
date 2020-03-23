import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/users/user.service';
import { UtilService } from 'src/app/shared/services/util/util.service';
import { StoreUnfiltered } from 'src/app/shared/services/store-unfiltered';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService extends StoreUnfiltered<User> {

  constructor(private userService: UserService,
              private utilService: UtilService) { 
    super();
  }

  public get(destory$: Observable<void>): Observable<User> {
    return super.get(destory$)
            .pipe(
              tap((user: User) => {
                if (this.utilService.isNullOrUndefined(user)) {
                  this.userService.getCurrentUser()
                    .pipe(
                      tap(user1 => this.set(user1))
                    ).subscribe();
                }
              })
            );
  }
}

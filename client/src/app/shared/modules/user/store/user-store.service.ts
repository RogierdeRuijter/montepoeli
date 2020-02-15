import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/services/store';
import { User } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService extends Store<User> {

  constructor() { 
    super();
  }
}

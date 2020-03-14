import { TestBed } from '@angular/core/testing';

import { UserStoreService } from './user-store.service';
import { UserService } from 'src/app/shared/services/users/user.service';
import { MockLocationStrategy } from '@angular/common/testing';

describe('UserStoreService', () => {
  let service: UserStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: UserService, useClass: MockLocationStrategy}
      ]
    });
    service = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserStoreService } from './user-store.service';
import { UserService } from '../../../services/users/user.service';
import { MockLocationStrategy } from '@angular/common/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('UserStoreService', () => {
  let service: UserStoreService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useClass: MockLocationStrategy }],
    });

    service = TestBed.inject(UserStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

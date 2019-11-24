import {TestBed} from '@angular/core/testing';

import {HomeService} from './home.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CookieService} from 'ngx-cookie-service';
import {MockLocationStrategy} from '@angular/common/testing';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [{provide: CookieService, useClass: MockLocationStrategy}]
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});

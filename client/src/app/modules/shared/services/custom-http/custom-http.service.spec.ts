import {TestBed} from '@angular/core/testing';

import {CustomHttpService} from './custom-http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CustomHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CustomHttpService = TestBed.get(CustomHttpService);
    expect(service).toBeTruthy();
  });
});

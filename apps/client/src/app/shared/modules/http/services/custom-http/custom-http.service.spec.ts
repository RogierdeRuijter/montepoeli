import { TestBed } from '@angular/core/testing';

import { CustomHttpService } from './custom-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnvironmentService } from '../../../../services/environment/environment.service';

describe('CustomHttpService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvironmentService],
    })
  );

  it('should be created', () => {
    const service: CustomHttpService = TestBed.inject(CustomHttpService);
    expect(service).toBeTruthy();
  });
});

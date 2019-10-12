import {TestBed} from '@angular/core/testing';

import {CustomHttpService} from './custom-http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../environment/environment.service';
import {EnvironmentServiceMock} from '../../../../../testing/mocks/environment-service.mock';

describe('CustomHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      {provide: EnvironmentService, useClass: EnvironmentServiceMock}
    ]
  }));

  it('should be created', () => {
    const service: CustomHttpService = TestBed.get(CustomHttpService);
    expect(service).toBeTruthy();
  });
});

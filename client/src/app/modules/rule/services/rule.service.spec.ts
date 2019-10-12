import {TestBed} from '@angular/core/testing';

import {RuleService} from './rule.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../../shared/services/environment/environment.service';
import {EnvironmentServiceMock} from '../../../../testing/mocks/environment-service.mock';

describe('RuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      {provide: EnvironmentService, useClass: EnvironmentServiceMock}
      ]
  }));

  it('should be created', () => {
    const service: RuleService = TestBed.get(RuleService);
    expect(service).toBeTruthy();
  });
});

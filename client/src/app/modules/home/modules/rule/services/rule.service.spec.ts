import {TestBed} from '@angular/core/testing';

import {RuleService} from './rule.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../../../../shared/services/environment/environment.service';

describe('RuleService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EnvironmentService]
  }));

  it('should be created', () => {
    const service: RuleService = TestBed.get(RuleService);
    expect(service).toBeTruthy();
  });
});

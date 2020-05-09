import {TestBed} from '@angular/core/testing';

import {RuleService} from './rule.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../../../../../../shared/services/environment/environment.service';
import { CustomHttpService } from '../../../../http/services/custom-http/custom-http.service';
import { MockLocationStrategy } from '@angular/common/testing';

describe('RuleService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      EnvironmentService,
      {provide: CustomHttpService, useClass: MockLocationStrategy}
    ]
  }));

  it('should be created', () => {
    const service: RuleService = TestBed.inject(RuleService);
    expect(service).toBeTruthy();
  });
});

import {TestBed} from '@angular/core/testing';

import {TranslateUtilService} from './translate-util.service';

describe('TranslateUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateUtilService = TestBed.inject(TranslateUtilService);
    expect(service).toBeTruthy();
  });
});

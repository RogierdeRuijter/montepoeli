import { TestBed } from '@angular/core/testing';

import { ComponentCreationService } from './component-creation.service';

describe('ComponentCreationService', () => {
  let service: ComponentCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {TestBed} from '@angular/core/testing';

import {StyleService} from './style.service';
import {Renderer2} from '@angular/core';

describe('StyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Renderer2
    ]
  }));

  it('should be created', () => {
    const service: StyleService = TestBed.get(StyleService);
    expect(service).toBeTruthy();
  });
});

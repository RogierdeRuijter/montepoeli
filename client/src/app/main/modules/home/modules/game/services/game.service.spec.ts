import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../../../../../../shared/services/environment/environment.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      EnvironmentService
    ]
  }));

  it('should be created', () => {
    const service: GameService = TestBed.inject(GameService);
    expect(service).toBeTruthy();
  });
});

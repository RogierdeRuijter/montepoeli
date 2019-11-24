import {TestBed} from '@angular/core/testing';

import {GameService} from './game.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EnvironmentService} from '../../../../shared/services/environment/environment.service';
import { CookieService } from 'ngx-cookie-service';
import { MockLocationStrategy } from '@angular/common/testing';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      EnvironmentService,
      {provide: CookieService, useClass: MockLocationStrategy}
    ]
  }));

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});

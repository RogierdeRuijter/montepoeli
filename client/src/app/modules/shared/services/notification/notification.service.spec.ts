import {TestBed} from '@angular/core/testing';

import {NotificationService} from './notification.service';
import {ToastrService} from 'ngx-toastr';
import {MockLocationStrategy} from '@angular/common/testing';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ToastrService, useClass: MockLocationStrategy}
      ]
  }));

  it('should be created', () => {
    const service: NotificationService = TestBed.inject(NotificationService);
    expect(service).toBeTruthy();
  });
});

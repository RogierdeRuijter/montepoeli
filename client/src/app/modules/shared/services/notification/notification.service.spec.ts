import {TestBed} from '@angular/core/testing';
import {ToastrService} from 'ngx-toastr';
import {MockLocationStrategy} from '@angular/common/testing';
import { NotificationService } from 'src/app/shared/modules/notification/services/notification/notification.service';

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

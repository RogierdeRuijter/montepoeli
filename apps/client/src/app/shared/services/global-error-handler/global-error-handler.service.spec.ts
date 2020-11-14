import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandlerService } from './global-error-handler.service';

describe('GlobalErrorHandlerService', () => {
  let service: GlobalErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('handleError', () => {
    it('should reload the window', () => {
      const error = {
        message: 'ChunkLoadError: Loading chunk 5 failed',
      };

      spyOn(service, 'reloadWindow').and.callFake(() => {});

      service.handleError(error);

      expect(service.reloadWindow).toHaveBeenCalled();
    });

    it('should log any other error message to the console', () => {
      const error = {
        message: 'type of undefinded',
      };

      spyOn(console, 'error');

      service.handleError(error);

      // eslint-disable-next-line
      expect(console.error).toHaveBeenCalled();
    });
  });
});

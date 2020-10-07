import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  public handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;

    if (chunkFailedMessage.test(error.message)) {
      this.reloadWindow();
    } else {
      // tslint:disable-next-line
      console.error(error);
    }
  }

  public reloadWindow(): any {
    window.location.reload(true);
  }
}

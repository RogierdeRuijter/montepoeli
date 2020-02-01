import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  public handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
 
     if (chunkFailedMessage.test(error.message)) {
       window.location.reload();
     } else {
       // tslint:disable-next-line
       console.log(error);
     }
   }
}

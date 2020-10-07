import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private subscribersCounter: Record<string, number> = {};
  private ioSocket: any;
  private eventObservables$: Record<string, Observable<any>> = {};

  public connect(url: string): void {
    const ioFunc = (io as any).default ? (io as any).default : io;

    this.ioSocket = ioFunc(url, {});
  }

  public fromEvent<T>(eventName: string): Observable<T> {
    if (!this.subscribersCounter[eventName]) {
      this.subscribersCounter[eventName] = 0;
    }
    this.subscribersCounter[eventName]++;

    if (!this.eventObservables$[eventName]) {
      this.eventObservables$[eventName] = new Observable((observer: any) => {
        const listener = (data: T) => {
          observer.next(data);
        };
        this.ioSocket.on(eventName, listener);
        return () => {
          this.subscribersCounter[eventName]--;
          if (this.subscribersCounter[eventName] === 0) {
            this.ioSocket.removeListener(eventName, listener);
            delete this.eventObservables$[eventName];
          }
        };
      }).pipe(share());
    }
    return this.eventObservables$[eventName];
  }
}

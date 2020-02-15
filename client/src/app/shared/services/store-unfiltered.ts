import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class StoreUnfiltered<T> {
  private store: BehaviorSubject<T> = new BehaviorSubject(null);

  public get(destory$: Observable<void>): Observable<T> {
    return this.store
      .pipe(takeUntil(destory$));
  }

  public set(value: T): void {
    this.store.next(value);
  }
}

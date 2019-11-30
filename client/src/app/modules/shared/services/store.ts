import {BehaviorSubject, EMPTY, Observable, of, Subject} from 'rxjs';
import {first, switchMap, finalize, takeUntil} from 'rxjs/operators';

export class Store<T> {
  private store: BehaviorSubject<T> = new BehaviorSubject(null);

  public get(destory$: Observable<void>): Observable<T> {
    return this.store
      .pipe(
        // first(),
        switchMap((value: T) => {
          if (value === null) {
            return EMPTY;
          } else {
            return of(value);
          }
        }),
        takeUntil(destory$)
        // finalize(() => this.emptyStore())
      );
  }

  public set(value: T): void {
    this.store.next(value);
  }

  private emptyStore(): void {
    this.set(null);
  }
}

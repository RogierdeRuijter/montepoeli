import {BehaviorSubject, EMPTY, Observable, of} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

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
}

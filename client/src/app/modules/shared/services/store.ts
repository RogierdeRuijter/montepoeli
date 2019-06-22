import {BehaviorSubject, EMPTY, Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

export class Store<T> {
  private store: BehaviorSubject<T> = new BehaviorSubject(null);

  public get(): Observable<T> {
    return this.store
      .pipe(
        switchMap((value: T) => {
          if (value === null) {
            return EMPTY;
          } else {
            return of(value);
          }
        }));
  }

  public set(value: T) {
    this.store.next(value);
  }
}

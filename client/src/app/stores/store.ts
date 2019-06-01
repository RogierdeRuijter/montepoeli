import {BehaviorSubject, Observable} from 'rxjs';

export class Store<T> {
  private store: BehaviorSubject<T> = new BehaviorSubject(null);

  public get(): Observable<T> {
    return this.store;
  }

  public set(value: T) {
    this.store.next(value);
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tabs} from '../shared/static-files/enums';
import {takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TabChangeGlobalEventEmitter {

  private store$: BehaviorSubject<Tabs> = new BehaviorSubject<Tabs>(null);

  public emit(tab: Tabs): void {
    this.store$.next(tab);
  }

  public get(destroy$: Observable<void>): Observable<Tabs> {
    return this.store$
            .pipe(
              takeUntil(destroy$)
            );
  }

  public method(): void {

  }
}

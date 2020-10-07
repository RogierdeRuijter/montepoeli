import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tabs } from '../static-files/enums';

@Injectable({
  providedIn: 'root',
})
export class TabChangeGlobalEventEmitter {
  private store$: BehaviorSubject<Tabs> = new BehaviorSubject<Tabs>(null);

  public emit(tab: Tabs): void {
    this.store$.next(tab);
  }

  public get(destroy$: Observable<void>): Observable<Tabs> {
    return this.store$.pipe(takeUntil(destroy$));
  }
}

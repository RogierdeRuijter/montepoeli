import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tabs} from '../modules/shared/static-files/enums';

@Injectable({
  providedIn: 'root'
})
export class TabChangeGlobalEventEmitter {

  private store$: BehaviorSubject<Tabs> = new BehaviorSubject<Tabs>(null);

  public emit(tab: Tabs): void {
    this.store$.next(tab);
  }

  public get(): Observable<Tabs> {
    return this.store$;
  }

  public method(): void {

  }
}

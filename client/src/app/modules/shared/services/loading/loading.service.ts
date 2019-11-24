import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {LoadingStore} from '../../stores/loading.store';
import {takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  public constructor(private loadingStore: LoadingStore) {
  }

  public activateDelayedLoading(stop$: Observable<void>): void {
    timer(400)
      .pipe(
        takeUntil(stop$)
      )
      .subscribe(() => this.loadingStore.set(true));
  }
}

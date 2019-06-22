import {Injectable} from '@angular/core';
import {timer} from 'rxjs';
import {LoadingStore} from '../../stores/loading.store';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  public constructor(private loadingStore: LoadingStore) {
  }

  public activateDelayedLoading(): void {
    timer(400).subscribe(() => this.loadingStore.set(true));
  }
}

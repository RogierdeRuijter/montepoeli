import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncBaseComponent implements OnDestroy {
  public destroy$: Subject<void> = new Subject();
  
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

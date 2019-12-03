import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BlurStore} from '../../shared/stores/blur.store';
import {Subject} from 'rxjs';
import {StandaloneStore} from 'src/app/shared/stores/standalone.store';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {
  public blur = false;

  public standalone: boolean;

  private destory$: Subject<void> = new Subject();

  constructor(private blurStore: BlurStore,
              private changeDetectorRef: ChangeDetectorRef,
              private standaloneStore: StandaloneStore) {}

  public ngOnInit(): void {
    this.blurStore
      .get(this.destory$)
      .subscribe((value: boolean) => {
        this.blur = value;
        this.changeDetectorRef.detectChanges();
      });

    // TODO: pass this with a resolver
    this.standaloneStore
    .get(this.destory$)
    .subscribe((standalone: boolean) => {
      this.standalone = standalone;
      this.changeDetectorRef.detectChanges();
    });
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

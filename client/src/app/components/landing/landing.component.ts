import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BlurStore} from '../../modules/shared/stores/blur.store';
import {UtilService} from '../../modules/shared/services/util/util.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  public blur = false;

  constructor(private blurStore: BlurStore,
              private utilService: UtilService,
              private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.blurStore.get()
      .subscribe((value: boolean) => {
        if (!this.utilService.isNullOrUndefined(value)) {
          this.blur = value;
          this.changeDetectorRef.detectChanges();
        }
      });
  }

}

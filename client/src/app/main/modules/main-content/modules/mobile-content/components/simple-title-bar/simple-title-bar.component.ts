import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons, IconSize, Tabs } from '../../../../../../../shared/static-files/enums';
import { TabChangeGlobalEventEmitter } from 'src/app/shared/services/tab-change.global-event-emitter';

@Component({
  selector: 'app-simple-title-bar',
  templateUrl: './simple-title-bar.component.html',
  styleUrls: ['./simple-title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTitleBarComponent {
  public Icons = Icons;
  public IconSize = IconSize;

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter) {}

  public handleButtonClicked(): void {
    // Not needed right now
    // this.router.navigate([this.environment.frontend.BASIC_ROUTES.HOME]);
    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }
}

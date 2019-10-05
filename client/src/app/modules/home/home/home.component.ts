import {AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Alignments, GridSizes, Icons, IconSize, Tabs} from '../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../services/tab-change.global-event-emitter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterContentInit {

  public showGames = true;
  public showRules = false;

  public Icons = Icons;
  public IconSize = IconSize;
  public GridSizes = GridSizes;
  public Alignments = Alignments;

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  public ngAfterContentInit(): void {
    this.tabChangeGlobalEventEmitter
      .get()
      .subscribe((tab: Tabs) => {
        console.log(tab);
        if (tab === Tabs.GAMES) {
          this.showRules = false;
          this.showGames = true;
          this.changeDetectorRef.detectChanges();
        }

        if (tab === Tabs.RULES) {
          this.showGames = false;
          this.showRules = true;
          this.changeDetectorRef.detectChanges();
        }
      });
  }
}

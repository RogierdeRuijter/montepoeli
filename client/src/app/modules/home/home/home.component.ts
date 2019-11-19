import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Tabs} from '../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../services/tab-change.global-event-emitter';
import {ActivatedRoute, Router} from '@angular/router';

// TODO: figure out if component is still needed
//  Maybe we can directly route to the game component and is this not needed
//  I believe it still is as a container for the router-outlet
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  // TOOD: see what to do with the tab navigation
  public ngOnInit(): void {
    this.tabChangeGlobalEventEmitter
      .get()
      .subscribe((tab: Tabs) => {
        if (tab === Tabs.GAMES) {
          this.router.navigate(['games'], {relativeTo: this.activatedRoute});
          return;
        }

        if (tab === Tabs.RULES) {
          this.router.navigate(['rules'], {relativeTo: this.activatedRoute});
          return;
        }
      });
  }
}

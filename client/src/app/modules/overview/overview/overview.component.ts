import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Tabs} from '../../shared/static-files/enums';
import {TabChangeGlobalEventEmitter} from '../../../services/tab-change.global-event-emitter';
import {ActivatedRoute, Router} from '@angular/router';
import { Environment } from 'src/environments/environment';

@Component({
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit {
  private environment = new Environment();

  constructor(private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.initialRouting();

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

  private initialRouting(): void {
    const url = this.router.url;

    if (this.routeContainerGames(url)) {
      this.emitTab(Tabs.GAMES);
    } else if (this.routeContainsRules(url)) {
      this.emitTab(Tabs.RULES);
    } else {
      this.emitTab(Tabs.GAMES);
    }
  }

  private routeContainerGames(url: string): boolean {
    return url.includes(this.environment.frontend.BASIC_ROUTES.GAMES);
  }

  private routeContainsRules(url: string): boolean {
    return url.includes(this.environment.frontend.BASIC_ROUTES.RULES);
  }

  private emitTab(tab: Tabs): void {
    this.tabChangeGlobalEventEmitter.emit(tab);
  }
}

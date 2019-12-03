import {Component, OnInit} from '@angular/core';
import {StandaloneStore} from './shared/stores/standalone.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private standaloneStore: StandaloneStore) {}

  public ngOnInit(): void {
    // TODO: remove standalone store
    this.standaloneStore.set(this.isInStandaloneMode());
  }
  private isInStandaloneMode(): boolean {
      // @ts-ignore
      return true;
      // return (window.matchMedia('(display-mode: standalone)').matches)
      // || (window.navigator.standalone) || document.referrer.includes('android-app://');
  }
}

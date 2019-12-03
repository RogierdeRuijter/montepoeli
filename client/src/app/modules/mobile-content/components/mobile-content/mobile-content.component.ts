import {Component} from '@angular/core';
import {AddGameStore} from 'src/app/shared/stores/add-game.store';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss']
})
export class MobileContentComponent {

  constructor(private addGameStore: AddGameStore) { }

  public addGameHandler(): void {
    // TODO: figure out how to set this properly
    // Move the component here or use the store
    // Store seems to be easier but it seems to be more logical if the popup lives here
    this.addGameStore.set(true);
  }

}

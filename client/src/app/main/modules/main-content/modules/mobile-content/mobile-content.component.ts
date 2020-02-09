import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, NgModule } from '@angular/core';
import { NewGameStore } from 'src/app/shared/stores/new-game.store';
import { Icons, Tabs } from '../../../../../shared/static-files/enums';
import { AsyncBaseComponent } from 'src/app/shared/modules/async/components/async-base-component/async-base.component';
import { Game } from '../../../../../shared/interfaces/game.interface';
import { RemoveLastAddedGameStore } from '../../../../../shared/stores/remove-last-added-game.store';
import { DialogOverviewComponent } from '../../../../../shared/modules/add-game/components/dialog-overview/dialog-overview.component';
// import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddGameModule } from 'src/app/shared/modules/add-game/add-game.module';
import { TabChangeGlobalEventEmitter } from 'src/app/shared/services/tab-change.global-event-emitter';
import { MobileContentModule } from './mobile-content.module';
import { GameService } from 'src/app/shared/modules/home/modules/game/services/game.service';
// import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileContentComponent extends AsyncBaseComponent implements OnInit, OnDestroy {

  @ViewChild('addDialog', {read: DialogOverviewComponent, static: true})
  public addDialog: DialogOverviewComponent;

  public gameView: boolean;
  public selected = Icons.CHESS_PIECES;

  constructor(private newGameStore: NewGameStore,
              private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
              private gameService: GameService,
              private removeLastAddedGameStore: RemoveLastAddedGameStore) {
                super();
              }
  
              // private dialog: MatDialog
  
              public ngOnInit(): void {
    this.tabChangeGlobalEventEmitter
      .get(this.destroy$)
      .subscribe((tab: Tabs) => {
        if (tab === Tabs.GAMES) {
          this.gameView = true;
          this.selected = Icons.CHESS_PIECES;
        }

        if (tab === Tabs.RULES) {
          this.gameView = false;
          this.selected = Icons.SCROLL;
        }

        this.closeAddGameModalIfOpen();
      });
  }

  private closeAddGameModalIfOpen(): void {
    // this.dialog.closeAll();
  }

  public plusEventHandler(): void {
    this.selected = Icons.PLUS;

    this.addDialog.openDialog();
  }

  public gamesHandler(): void {
    this.changeToGamesView();
  }

  private changeToGamesView(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.GAMES);
  }

  public rulesHandler(): void {
    this.tabChangeGlobalEventEmitter.emit(Tabs.RULES);
  }

  public addHandler(game: Game): void {
    this.changeToGamesView();

    this.updateViewWithNewGame(game);

    this.gameService.save(game)
      .subscribe(
        () => {},
        () => this.removeAddedGameFromView(game),
      );
  }

  public updateViewWithNewGame(game: Game): void {
    this.newGameStore.set(game);
  }

  public removeAddedGameFromView(game: Game): void {
    this.removeLastAddedGameStore.set(game);
  }

  public cancelHandler(): void {
    // TODO: test this logic
    // if (this.dialog?.openDialogs.length === 0) {
      // this.changeToGamesView();
    // }
  }
}

/* tslint:disable */
@NgModule({
  declarations: [
    MobileContentComponent
  ],
  imports: [
    CommonModule,
    MobileContentModule,
    RouterModule,
    AddGameModule
  ]
})
class NotNeedForAName { }

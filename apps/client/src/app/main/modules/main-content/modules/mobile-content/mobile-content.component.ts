import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  NgModule,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
  ChangeDetectorRef,
  ComponentRef,
  Compiler,
} from '@angular/core';
import { Icons, Tabs } from '../../../../../shared/static-files/enums';
import { Game } from '../../../../../shared/interfaces/game.interface';
import { RemoveLastAddedGameStore } from '../../../../../shared/stores/remove-last-added-game.store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileContentModule } from './mobile-content.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AsyncBaseComponent } from '../../../../../shared/modules/async/components/async-base-component/async-base.component';
import { NewGameStore } from '../../../../../shared/stores/new-game.store';
import { TabChangeGlobalEventEmitter } from '../../../../../shared/services/tab-change.global-event-emitter';
import { GameService } from '../../../../../shared/modules/home/modules/game/services/game.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileContentComponent
  extends AsyncBaseComponent
  implements OnInit, OnDestroy {
  @ViewChild('addDialog', { read: ViewContainerRef })
  public addDialogContainer: ViewContainerRef;

  public addDialogContainerRef: ComponentRef<any>; // TODO: type

  public gameView: boolean;
  public selected = Icons.CHESS_PIECES;

  public raisedFooter: boolean;

  constructor(
    private newGameStore: NewGameStore,
    private tabChangeGlobalEventEmitter: TabChangeGlobalEventEmitter,
    private gameService: GameService,
    private removeLastAddedGameStore: RemoveLastAddedGameStore,
    private dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private changeDetectorRef: ChangeDetectorRef,
    private compiler: Compiler
  ) {
    super();
  }

  public ngOnInit(): void {
    if (
      window.matchMedia('(display-mode: standalone)').matches &&
      this.isIPhoneXVariant()
    ) {
      this.raisedFooter = true;
    }

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

  // TODO: move to service and test the method
  private isIPhoneXVariant(): boolean {
    const aspect = window.screen.width / window.screen.height;

    return (
      navigator.userAgent.match(/(iPhone)/) && aspect.toFixed(3) === '0.462'
    );
  }

  private closeAddGameModalIfOpen(): void {
    this.dialog.closeAll();
  }

  public plusEventHandler(): void {
    this.selected = Icons.PLUS;

    this.createAddGameComponent();
  }

  private async createAddGameComponent(): Promise<void> {
    const { DialogOverviewComponent } = await import(
      '../../../../../shared/modules/add-game/components/dialog-overview/dialog-overview.component'
    );
    const { AddGameModule } = await import(
      '../../../../../shared/modules/add-game/add-game.module'
    );

    const compFactory = this.componentFactoryResolver.resolveComponentFactory(
      DialogOverviewComponent
    );

    const factory = await this.compiler.compileModuleAsync(AddGameModule);
    const ref = factory.create(this.injector);

    this.addDialogContainerRef = this.addDialogContainer.createComponent(
      compFactory,
      null,
      this.injector,
      [],
      ref
    );
    this.changeDetectorRef.detectChanges();

    this.addDialogContainerRef.instance.addEvent.subscribe((game: Game) =>
      this.addHandler(game)
    );
    this.addDialogContainerRef.instance.cancelEvent.subscribe(() =>
      this.cancelHandler()
    );
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

  public iconClickedHandler(): void {
    this.changeToGamesView();
  }

  public addHandler(game: Game): void {
    this.changeToGamesView();

    this.updateViewWithNewGame(game);

    this.gameService.save(game)
      .pipe(
        catchError((error) => {
          this.removeAddedGameFromView(game);

          return of(error);
        })
      ).subscribe();

    this.unsubsribeFromRunningObservablesOfAddGame();
  }

  public updateViewWithNewGame(game: Game): void {
    this.newGameStore.set(game);
  }

  public removeAddedGameFromView(game: Game): void {
    this.removeLastAddedGameStore.set(game);
  }

  public cancelHandler(): void {
    this.changeToGamesView();
    this.changeDetectorRef.detectChanges();

    this.unsubsribeFromRunningObservablesOfAddGame();
  }

  private unsubsribeFromRunningObservablesOfAddGame(): void {
    this.addDialogContainerRef.instance.addEvent.unsubscribe();
    this.addDialogContainerRef.instance.cancelEvent.unsubscribe();
  }
}

/* tslint:disable */
@NgModule({
  declarations: [MobileContentComponent],
  imports: [CommonModule, MobileContentModule, RouterModule, MatDialogModule],
})
export class InternalMobileContentComponent {}

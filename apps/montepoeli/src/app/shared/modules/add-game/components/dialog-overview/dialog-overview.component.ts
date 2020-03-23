import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {DialogDataComponent} from '../dialog-data/dialog-data.component';
import {Game} from '../../../../interfaces/game.interface';
import {UtilService} from '../../../../services/util/util.service';
import {MatDialog} from '@angular/material/dialog';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GameFactory } from '../../../home/modules/game/factories/game.factory';

@Component({
  selector: 'app-dialog-overview',
  template: ``,
})
export class DialogOverviewComponent implements OnInit {

  @Output()
  public addEvent: EventEmitter<Game> = new EventEmitter();

  @Output()
  public cancelEvent: EventEmitter<Game> = new EventEmitter();

  public game: Game = new GameFactory().create();

  public unsubscriber$: Subject<void>;

  constructor(public dialog: MatDialog,
              private utilService: UtilService,
              private router: Router) {
  }
  
  public ngOnInit(): void {
    this.openDialog();
  }

  public openDialog(): void {
    this.unsubscriber$ = new Subject();

    this.dialog.closeAll();
    
    const dialogRef = this.dialog.open(DialogDataComponent, {
      data: {
        white: this.game.white,
        winner: this.game.winner,
        black: this.game.black,
      } as Game,
      maxWidth: '250px'
    });
    
    // No need to unsubscribe since it is a one off observable
    dialogRef.afterClosed().subscribe((result: Game | string) => {
      if (this.addEventIsReceived(result)) {
        this.addEvent.emit(result as Game);
      }

      if (result === 'cancelButton') {
        this.cancelEvent.emit();
      }

      this.unsubscriber$.next();
    });

    this.closeDialogWhenTheUrlChanges();
  }

  private closeDialogWhenTheUrlChanges(): void {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        takeUntil(this.unsubscriber$)
      )
      .subscribe(() => this.dialog?.closeAll());
  }

  private addEventIsReceived(result: any): boolean {
    return !this.utilService.isNullOrUndefined(result?.white);
  }
}

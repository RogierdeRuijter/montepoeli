import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Actions, Alignments, GridSizes} from '../../../../shared/static-files/enums';
import {Observable} from 'rxjs';
import {Game} from '../../../../shared/interfaces/game.interface';

@Component({
  selector: 'ui-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {

  public GridSizes = GridSizes;

  @Input()
  public loading: boolean;

  @Input()
  public displayedColumns: string[];

  @Input()
  public games$: Observable<Game[]>;

  @Input()
  public loadingGames: any;

  @Input()
  public actions: Actions[];

  @Input()
  public disabled: boolean[];

  @Output()
  public actionEvent: EventEmitter<any> = new EventEmitter();

  public Alignments = Alignments;

  public emitActionEvent(event: any): void {
    this.actionEvent.emit(event);
  }
}

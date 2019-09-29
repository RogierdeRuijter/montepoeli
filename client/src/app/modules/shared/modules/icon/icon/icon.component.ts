import {Component, Input, OnInit} from '@angular/core';
import {Icons, IconSize} from '../../../static-files/enums';
import {IconDefinition, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faChessRook, faCoffee, faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {

  @Input()
  public id: string;

  @Input()
  public icon: Icons;

  @Input()
  public iconSize: IconSize = IconSize.MEDIUM;

  @Input()
  public disabled = false;

  public iconDefinition: IconDefinition;
  public size: SizeProp;

  public ngOnInit(): void {
    switch (this.icon) {
      case Icons.CHECK:
        this.iconDefinition = faCheck;
        break;
      case Icons.CROSS:
        this.iconDefinition = faTimes;
        break;
      case Icons.PLUS:
        this.iconDefinition = faPlus;
        break;
      case Icons.DELETE:
        this.iconDefinition = faTimes;
        break;
      case Icons.ROOK:
        this.iconDefinition = faChessRook;
        break;
      case Icons.COFFEE:
        this.iconDefinition = faCoffee;
        break;
      case Icons.GREEN_HEART:
        this.iconDefinition = faHeart;
        break;
      // default: throw new UnknownCaseException();

    }

    switch (this.iconSize) {
      case IconSize.SMALL:
        this.size = '1x';
        break;
      case IconSize.MEDIUM:
        this.size = '2x';
        break;
      case IconSize.LARGE:
        this.size = '3x';
        break;
      // default: throw new UnknownCaseException();
    }

    switch (this.icon) {
      case Icons.GREEN_HEART:
        // TODO: use render to set the color to green
    }
  }
}

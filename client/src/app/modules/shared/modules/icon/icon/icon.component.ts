import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Icons, IconSize} from '../../../static-files/enums';
import {IconDefinition, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faChessRook, faCoffee, faPlus, faTimes, faUser, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faChess} from '@fortawesome/free-solid-svg-icons/faChess';
import {faScroll} from '@fortawesome/free-solid-svg-icons/faScroll';
import { UnknownCaseException } from '../../../exceptions/UnknownCaseException';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, AfterViewInit {

  @Input()
  public id: string;

  @Input()
  public icon: Icons;

  @Input()
  public iconSize: IconSize = IconSize.MEDIUM;

  @Input()
  public disabled = false;

  @ViewChild('svgIconElement', {static: false})
  public svgIconElementRef: ElementRef;

  @ViewChild('fontAwesomeComponent', {static: false})
  public faIcon: ElementRef;

  public iconDefinition: IconDefinition;
  public size: SizeProp;

  public svgIcon: string;

  constructor(private renderer: Renderer2) {}

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
      case Icons.CHESS_PIECES:
        this.iconDefinition = faChess;
        break;
      case Icons.SCROLL:
        this.iconDefinition = faScroll;
        break;
      case Icons.USER:
        this.iconDefinition = faUser;
        break;
      case Icons.PLUS_WITH_BOX:
        this.iconDefinition = faPlusSquare;
        break;
      case Icons.MONTEPOELI:
        this.svgIcon = '../../../../../../assets/images/florance_logo.png';
        break;
      default: throw new UnknownCaseException('unkown');
    }

    switch (this.iconSize) {
      case IconSize.SMALL:
        this.size = '1x';
        break;
      case IconSize.SMALL_MEDIUM:
        this.size = 'lg';
        break;
      case IconSize.MEDIUM:
        this.size = '2x';
        break;
      case IconSize.LARGE:
        this.size = '3x';
        break;
      default: throw new UnknownCaseException('unkown');
    }
  }

  public ngAfterViewInit(): void {
    if (this.icon === Icons.MONTEPOELI) {
      if (this.iconSize === IconSize.SMALL) {
        this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'height', '45px');
        // this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'width', '33px');
      }
      if (this.iconSize === IconSize.MEDIUM) {
        this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'height', '56px');
        this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'width', '41px');
      }
    }

    if (this.icon === Icons.GREEN_HEART) {
      this.renderer.setStyle(this.faIcon.nativeElement, 'color', 'green');
    }
  }
}

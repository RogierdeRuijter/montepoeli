import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IconColor, Icons, IconSize} from '../../../../static-files/enums';
import {IconDefinition, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faChessRook, faCoffee, faPlus, faPlusSquare, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faChess} from '@fortawesome/free-solid-svg-icons/faChess';
import {faScroll} from '@fortawesome/free-solid-svg-icons/faScroll';
import {UnknownCaseException} from '../../../../exceptions/UnknownCaseException';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  public id: string;

  @Input()
  public icon: Icons;

  @Input()
  public iconSize: IconSize = IconSize.MEDIUM;

  @Input()
  public iconColor: IconColor;

  @ViewChild('svgIconElement')
  public svgIconElementRef: ElementRef;

  @ViewChild('fontAwesomeComponent')
  public faIcon: ElementRef;

  public iconDefinition: IconDefinition;
  public size: SizeProp;
  public color: string;

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

  public ngOnChanges(changes: any): void {
    if (changes.iconColor && changes.iconColor.currentValue) {
      switch (this.iconColor) {
        case IconColor.BLACK:
          this.color = 'black';
          break;
        case IconColor.GRAY:
          this.color = 'dark-grey';
          break;
        default: throw new UnknownCaseException(this.iconColor);
      }
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
    // TODO: refactor this to use colorIcon green
    if (this.icon === Icons.GREEN_HEART) {
      this.renderer.setStyle(this.faIcon.nativeElement, 'color', 'green');
    }
  }
}

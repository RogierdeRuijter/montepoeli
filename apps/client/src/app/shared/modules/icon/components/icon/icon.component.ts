import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IconColor, Icons, IconSize } from '../../../../static-files/enums';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faChessRook,
  faCoffee,
  faPlus,
  faPlusSquare,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faChess } from '@fortawesome/free-solid-svg-icons/faChess';
import { faScroll } from '@fortawesome/free-solid-svg-icons/faScroll';
import { UnknownCaseException } from '../../../../exceptions/UnknownCaseException';

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
  public iconSize: IconSize = IconSize.medium;

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
  public matIcon: string;

  constructor(private renderer: Renderer2) {}

  public ngOnInit(): void {
    switch (this.icon) {
      case Icons.check:
        this.iconDefinition = faCheck;
        break;
      case Icons.cross:
        this.iconDefinition = faTimes;
        break;
      case Icons.plus:
        this.iconDefinition = faPlus;
        break;
      case Icons.delete:
        this.iconDefinition = faTimes;
        break;
      case Icons.rook:
        this.iconDefinition = faChessRook;
        break;
      case Icons.coffee:
        this.iconDefinition = faCoffee;
        break;
      case Icons.heart:
        this.matIcon = 'heart';
        break;
      case Icons.chessPieces:
        this.iconDefinition = faChess;
        break;
      case Icons.scroll:
        this.iconDefinition = faScroll;
        break;
      case Icons.user:
        this.iconDefinition = faUser;
        break;
      case Icons.plusWithBox:
        this.iconDefinition = faPlusSquare;
        break;
      case Icons.montepoeli:
        this.svgIcon = '../../../../../../assets/images/florance_logo.png';
        break;
      default:
        throw new UnknownCaseException('unkown icon: ' + this.icon);
    }

    switch (this.iconSize) {
      case IconSize.small:
        this.size = '1x';
        break;
      case IconSize.smallMedium:
        this.size = 'lg';
        break;
      case IconSize.medium:
        this.size = '2x';
        break;
      case IconSize.large:
        this.size = '3x';
        break;
      default:
        throw new UnknownCaseException('unkown icon size: ' + this.iconSize);
    }
  }

  public ngOnChanges(changes: any): void {
    if (changes.iconColor && changes.iconColor.currentValue) {
      switch (this.iconColor) {
        case IconColor.black:
          this.color = 'black';
          break;
        case IconColor.gray:
          this.color = 'dark-grey';
          break;
        case IconColor.accent:
          this.color = 'accent';
          break;
        default:
          throw new UnknownCaseException('unkown icon color: ' + this.iconColor);
      }
    }
  }

  public ngAfterViewInit(): void {
    if (this.icon === Icons.montepoeli) {
      if (this.iconSize === IconSize.small) {
        this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'height', '45px');
        // this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'width', '33px');
      }
      if (this.iconSize === IconSize.medium) {
        this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'height', '56px');
        this.renderer.setStyle(this.svgIconElementRef.nativeElement, 'width', '41px');
      }
    }
  }
}

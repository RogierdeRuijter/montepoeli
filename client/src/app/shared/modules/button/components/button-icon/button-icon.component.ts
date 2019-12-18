import { Component, EventEmitter, Input, Output, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { IconColor, Icons, IconSize } from '../../../../static-files/enums';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent implements AfterViewInit {

  @Input()
  public icon: Icons;

  @Input()
  public iconSize: IconSize;

  @Input()
  public iconColor: IconColor;

  @Input()
  public squareButton = false;

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  @ViewChild(MatButton, {static: true})
  public buttonOne: MatButton;

  constructor(private renderer: Renderer2) {}

  public clicked(): void {
    this.clickEvent.emit();
  }

  public ngAfterViewInit(): void {
    if (this.squareButton) {
      this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'width', 'inherit');
      this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'height', 'inherit');
      this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'line-height', 'inherit');
      this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'border-radius', 'inherit');
   }
  }
}

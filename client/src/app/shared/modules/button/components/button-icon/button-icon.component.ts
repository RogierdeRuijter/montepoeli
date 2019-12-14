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

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  @ViewChild(MatButton, {static: true})
  public buttonOne: MatButton;

  public clicked(): void {
    this.clickEvent.emit();
  }

  constructor(private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'width', '25px');
    this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'height', '25px');
    this.renderer.setStyle(this.buttonOne._elementRef.nativeElement, 'line-height', '25px');
  }
}

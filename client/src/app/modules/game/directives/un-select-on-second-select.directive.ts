import {
  AfterContentChecked,
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
} from '@angular/core';
import {NgForm} from '@angular/forms';

@Directive({
  selector: '[appUnSelectOnSecondSelect]',
})
export class UnSelectOnSecondSelectDirective implements OnChanges, OnInit, AfterContentChecked, OnInit, AfterContentInit {

  @Input('appUnSelectOnSecondSelect')
  public value: string;

  private previousValue = '';

  constructor(private elementRef: ElementRef,
              @Optional() private ngForm: NgForm) {
  }

  public ngOnInit(): void {
  }

  public ngAfterContentInit(): void {
    // const nameOfControl = this.elementRef.nativeElement.attributes['ng-reflect-name'].nodeValue;
    // console.log(nameOfControl);
    // console.log(this.ngForm.controls);
  }

  public ngAfterContentChecked(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // const nameOfControl = this.elementRef.nativeElement.attributes['ng-reflect-name'].nodeValue;

    console.log(this.value);

    if (this.value !== null) {
      // console.log(nameOfControl);
      // console.log(this.ngForm);
      // this.ngForm.controls[nameOfControl].valueChanges.subscribe((value) => console.log(value));
    }

    if (this.previousValue === this.value) {
      // this.ngForm.controls[nameOfControl].reset();
      this.previousValue = this.value;
    }
  }
}

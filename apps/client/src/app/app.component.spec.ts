import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ThemeService } from './shared/services/theme/theme.service';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { MockLocationStrategy } from '@angular/common/testing';

fdescribe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      {provide: OverlayContainer, useFactory: () => {}},
      {provide: ChangeDetectorRef, useFactory: () => {}},
      {provide: ThemeService, useFactory: () => {}},
    ],
    declarations: [
      AppComponent
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
  }).compileComponents();
  
  spyOn(window, 'matchMedia').and.returnValue('');
    
});

  it('when ngOnInit is called it should', () => {
    AppComponent.prototype.ngOnInit = () => {} ;
    const appComp = AppComponent;

    const fixture = TestBed.createComponent(appComp);
    const app = fixture.componentInstance;

    console.log(app);
    // arrange
    // const { build } = setup().default();
    // const c = build();
    // act
    // c.ngOnInit();
    // assert
    // expect(c).toEqual
  });  
});

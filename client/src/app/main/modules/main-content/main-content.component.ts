import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { tap, filter } from 'rxjs/operators';
import { GridSizes } from 'src/app/shared/static-files/enums';
import { GridService } from 'src/app/shared/services/grid/grid.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
              private injector: Injector,
              private gridService: GridService) {}

  @ViewChild('mobileContent', { read: ViewContainerRef, static: false}) 
  public mobileContentContainer: ViewContainerRef;

  @ViewChild('largeScreenContent', { read: ViewContainerRef, static: false }) 
  public largeScreenContentContainer: ViewContainerRef;

  public activeView: string;

  public ngOnInit(): void {
    this.gridService.gridChangeObservable()
      .pipe(
        filter((activeGridSize: GridSizes) => activeGridSize !== GridSizes.EXTRA_SMALL && this.activeView !== 'large-screen'),
        tap(() => this.activeView = 'large-screen'),
        filter(() => !this.largeScreenContentContainer || this.largeScreenContentContainer.length === 0),
        tap(() => this.createLargeScreenConent())
    ).subscribe();

    this.gridService.gridChangeObservable()
      .pipe(
        filter((activeGridSize: GridSizes) => activeGridSize === GridSizes.EXTRA_SMALL),
        tap(() => this.activeView = 'mobile'),
        filter(() => !this.mobileContentContainer || this.mobileContentContainer.length === 0),
        tap(() => this.createMobileConent())
      ).subscribe();
  }

  public async createMobileConent(): Promise<void> {
    const { MobileContentComponent } = await import('./modules/mobile-content/mobile-content.component');
    const mobileContentFactory = this.componentFactoryResolver.resolveComponentFactory(MobileContentComponent);
    this.mobileContentContainer.createComponent(mobileContentFactory, null, this.injector);
  }

  public async createLargeScreenConent(): Promise<void> {
    const { LargeScreenContentComponent } = await import('./modules/larger-screen-content/large-screen-content.component');
    const largeScreenContentFactory = this.componentFactoryResolver.resolveComponentFactory(LargeScreenContentComponent);
    this.largeScreenContentContainer.createComponent(largeScreenContentFactory, null, this.injector);
  }
}

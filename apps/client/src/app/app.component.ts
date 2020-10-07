import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  // @HostBinding('class')
  public componentCssClass;

  public themeChangingHandler = (e) => {
    const newTheme = this.themeService.getThemeForColorScheme(e?.matches);

    this.removeActiveThemeFromApplication();
    this.addThemeToWholeApplication(newTheme);

    this.changeDetectorRef.detectChanges();
  };

  private removeActiveThemeFromApplication = () => {
    const overlayContainerClasses = this.overlayContainer.getContainerElement()
      .classList;
    const themeClassesToRemove = Array.from(
      overlayContainerClasses
    ).filter((item: string) => item.includes('-theme'));

    if (themeClassesToRemove.length > 0) {
      this.overlayContainer
        .getContainerElement()
        .classList.remove(...themeClassesToRemove);
    }
  };

  public darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(
    private overlayContainer: OverlayContainer,
    private changeDetectorRef: ChangeDetectorRef,
    private themeService: ThemeService
  ) {}

  public ngOnInit(): void {
    const theme:
      | 'black-theme'
      | 'light-theme' = this.themeService.getThemeBasedOnSystemPreference();

    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;

    this.addThemeToWholeApplication(theme);

    this.darkModeMediaQuery.addListener(this.themeChangingHandler);
  }

  private addThemeToWholeApplication(
    theme: 'black-theme' | 'light-theme'
  ): void {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  public ngOnDestroy(): void {
    this.darkModeMediaQuery.removeListener(this.themeChangingHandler);
  }
}

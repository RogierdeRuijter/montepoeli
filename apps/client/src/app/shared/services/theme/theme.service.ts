import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public getThemeBasedOnSystemPreference(): 'black-theme' | 'light-theme' {
    if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      return 'black-theme';
    } else {
      return 'light-theme';
    }
  }

  public getThemeForColorScheme(darkMode: boolean): 'black-theme' | 'light-theme' {
    if (darkMode) {
      return 'black-theme';
    } else {
      return 'light-theme';
    }
  }
}

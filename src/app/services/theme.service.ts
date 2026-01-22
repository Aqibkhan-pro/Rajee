import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app_theme';
  private readonly themeSubject = new BehaviorSubject<ThemeMode>(this.getSavedTheme());

  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.initTheme();
    this.watchSystemTheme();
  }

  private getSavedTheme(): ThemeMode {
    const saved = localStorage.getItem(this.THEME_KEY);
    return (saved as ThemeMode) || 'light';
  }

  private initTheme() {
    this.applyTheme(this.getSavedTheme());
  }

  private watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (this.getSavedTheme() === 'system') {
        this.applyDarkMode(e.matches);
      }
    });
  }

  getCurrentTheme(): ThemeMode {
    return this.themeSubject.value;
  }

  isDarkMode(): boolean {
    const theme = this.getCurrentTheme();
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    // system
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  setTheme(theme: ThemeMode) {
    localStorage.setItem(this.THEME_KEY, theme);
    this.themeSubject.next(theme);
    this.applyTheme(theme);
  }

  toggleDarkMode() {
    const currentDark = this.isDarkMode();
    this.setTheme(currentDark ? 'light' : 'dark');
  }

  private applyTheme(theme: ThemeMode) {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyDarkMode(prefersDark);
    } else {
      this.applyDarkMode(theme === 'dark');
    }
  }

  private applyDarkMode(isDark: boolean) {
    document.body.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('light-theme', !isDark);

    // Update status bar color for mobile
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#121212' : '#0573c1');
    }
  }
}

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly theme = signal<Theme>('light');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.applyTheme(this.theme());
  }

  setTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.theme.set(theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.classList.remove('light-theme', 'dark-theme');

    document.documentElement.classList.add(
      theme === 'light' ? 'light-theme' : 'dark-theme',
    );
  }
}

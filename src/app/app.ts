import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/nav-bar/nav-bar';
import { ThemeService } from './core/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private themeService: ThemeService) {}

  protected readonly title = signal('PaintingContests');

  ngOnInit() {
    this.themeService.initialize();
  }
}

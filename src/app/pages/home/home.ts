import { Component } from '@angular/core';
import { NextContests } from './components/next-contests/next-contests';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-home',
  imports: [NextContests],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  userName = '';

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    const user = await this.authService.getCurrentUser();

    this.userName = user?.user_metadata?.['full_name'] ?? '';
  }

  async login() {
    await this.authService.signInWithGoogle();
  }

  async logout() {
    await this.authService.logout();

    this.userName = '';
  }
}

import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private supabase: SupabaseService,
    private authStore: AuthStore,
  ) {}

  async initialize() {
    const {
      data: { user },
    } = await this.supabase.client.auth.getUser();

    this.authStore.setUser(user);
  }

  async login() {
    await this.supabase.client.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  async logout() {
    await this.supabase.client.auth.signOut();

    this.authStore.clear();
  }
}

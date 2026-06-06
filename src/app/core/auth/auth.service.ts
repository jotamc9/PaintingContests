import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  async signInWithGoogle() {
    const { data, error } =
      await this.supabaseService.client.auth.signInWithOAuth({
        provider: 'google',
      });

    if (error) {
      throw error;
    }

    return data;
  }

  async logout(): Promise<void> {
    const { error } = await this.supabaseService.client.auth.signOut();

    if (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    const { data, error } = await this.supabaseService.client.auth.getUser();

    if (error) {
      throw error;
    }

    return data.user;
  }
}

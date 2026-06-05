import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  async signInWithGoogle() {
    if (!this.supabaseService.client) {
      return;
    }

    return this.supabaseService.client.auth.signInWithOAuth({
      provider: 'google',
    });
  }
}

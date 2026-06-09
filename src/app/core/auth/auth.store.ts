import { Injectable, computed, signal } from '@angular/core';
import { User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  readonly user = signal<User | null>(null);

  readonly isAuthenticated = computed(() => this.user() !== null);

  setUser(user: User | null) {
    this.user.set(user);
  }

  clear() {
    this.user.set(null);
  }
}

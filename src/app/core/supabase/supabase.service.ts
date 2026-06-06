import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private readonly _client: SupabaseClient | null;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this._client = isPlatformBrowser(platformId)
      ? createClient(environment.supabaseUrl, environment.supabaseKey)
      : null;
  }

  get client(): SupabaseClient {
    if (!this._client) {
      throw new Error('Supabase client is not available');
    }

    return this._client;
  }
}

import { Component } from '@angular/core';
import { NextContests } from './components/next-contests/next-contests';
import { SupabaseService } from '../../core/supabase/supabase.client';

@Component({
  selector: 'app-home',
  imports: [NextContests],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    const result = await this.supabaseService.testDatabase();

    console.log(result);
  }
}

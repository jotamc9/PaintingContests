import { Component } from '@angular/core';
import { ContestCard } from './components/contest-card/contest-card';

@Component({
  selector: 'app-next-contests',
  imports: [ContestCard],
  templateUrl: './next-contests.html',
  styleUrl: './next-contests.scss',
})
export class NextContests {}

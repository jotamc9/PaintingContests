import { Component } from '@angular/core';
import { Search } from './components/search/search';

@Component({
  selector: 'app-contests',
  imports: [Search],
  templateUrl: './contests.html',
  styleUrl: './contests.scss',
})
export class Contests {}

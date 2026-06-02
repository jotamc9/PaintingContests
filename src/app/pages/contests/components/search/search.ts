import { Component } from '@angular/core';
import { SearchBar } from './components/search-bar/search-bar';
import { SearchResults } from './components/search-results/search-results';

@Component({
  selector: 'app-search',
  imports: [SearchBar, SearchResults],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {}

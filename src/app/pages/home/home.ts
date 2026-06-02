import { Component } from '@angular/core';
import { NextContests } from './components/next-contests/next-contests';

@Component({
  selector: 'app-home',
  imports: [NextContests],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

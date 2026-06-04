import { Component } from '@angular/core';
import { CalendarLayout } from './components/calendar-layout/calendar-layout';

@Component({
  selector: 'app-calendar',
  imports: [CalendarLayout],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {}

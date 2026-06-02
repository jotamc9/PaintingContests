import { Component } from '@angular/core';
import { CalendarBody } from './components/calendar-body/calendar-body';
import { CalendarHeader } from './components/calendar-header/calendar-header';
import { CalendarFooter } from './components/calendar-footer/calendar-footer';

@Component({
  selector: 'app-calendar-layout',
  imports: [CalendarHeader, CalendarBody, CalendarFooter],
  templateUrl: './calendar-layout.html',
  styleUrl: './calendar-layout.scss',
})
export class CalendarLayout {}

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contests } from './pages/contests/contests';
import { Settings } from './pages/settings/settings';
import { Calendar } from './pages/calendar/calendar';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: Home,
    path: 'home',
  },
  {
    component: Calendar,
    path: 'calendar',
  },
  {
    component: Contests,
    path: 'contests',
  },
  {
    component: Settings,
    path: 'settings',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

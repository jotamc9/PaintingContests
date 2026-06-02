import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contests } from './pages/contests/contests';
import { Settings } from './pages/settings/settings';

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

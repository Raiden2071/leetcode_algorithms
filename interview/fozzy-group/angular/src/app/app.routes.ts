import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { FagComponent } from './fag/fag.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'fag', component: FagComponent }
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: AccessDeniedComponent },
  // { path: '', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  // { path: 'dashboard', component: DashboardComponent },
];

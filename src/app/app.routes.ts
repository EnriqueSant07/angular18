import { Routes } from '@angular/router';
import { authGuardGuard } from './shared/others/guard/auth-guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
    canActivate: [authGuardGuard],
  },
  {
    path: 'Dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [authGuardGuard],
    children:[
    {
        path: 'users',
        loadComponent: () => import('./dashboard/page/users/users.component').then((c) => c.UsersComponent)
    }
    ]
  },
];

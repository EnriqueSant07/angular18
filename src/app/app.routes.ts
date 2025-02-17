import { Routes } from '@angular/router';
import { authIntercpetorInterceptor } from './shared/others/interceptors/auth-intercpetor.interceptor';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
    canActivate: [authIntercpetorInterceptor],
  },
  {
    path: 'Dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    canActivate: [authIntercpetorInterceptor],
    children:[
    {
        path: 'users',
        loadComponent: () => import('./dashboard/page/users/users.component').then((c) => c.UsersComponent)
    }
    ]
  },
];

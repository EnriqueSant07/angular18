import { Routes } from '@angular/router';
import { authGuardGuard } from './shared/others/guard/auth-guard.guard';
import { MainComponentComponent } from './dashboard/layout/main-component/main-component.component';
import { DashComponentComponent } from './dashboard/layout/dash-component/dash-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: MainComponentComponent,
    children:[
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login/login.component').then((c) => c.LoginComponent),
      }
    ]
  },
  {
    path: 'Dashboard',
    component: DashComponentComponent,
    canActivate: [authGuardGuard],
    children:[
    {
        path: 'users',
        loadComponent: () => import('./dashboard/page/users/users.component').then((c) => c.UsersComponent)
    }
    ]
  },
];

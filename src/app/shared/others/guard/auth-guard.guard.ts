import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const ruta = inject(Router);
  if (auth.getTokenAccess()) {
    return true;
  }
  auth.removeToken();
  ruta.navigateByUrl('/login');
  return false;
};

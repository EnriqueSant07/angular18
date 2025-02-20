import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { catchError, throwError } from 'rxjs';

export const authIntercpetorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService);
  if (token && !req.url.includes('/login')) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token.getTokenAccess()}`,
      },
    });
  }
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status == 401) {
        token.logoutUser();
      }
      return throwError(() => err);
    })
  );
};

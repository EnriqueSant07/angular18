import { HttpInterceptorFn } from '@angular/common/http';

export const authIntercpetorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

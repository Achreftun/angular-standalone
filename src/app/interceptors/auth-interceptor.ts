import { HttpInterceptorFn } from '@angular/common/http';
import { User } from '../models/user';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // if (req.url == 'http://localhost:8080/inmemory/adresses') {
  //   return next(req);
  // }
  const userString = localStorage.getItem('user')

  if (!userString) {
    return next(req);
  }

  const user: User = JSON.parse(userString ?? '')
  const authorization = btoa(`${user.username}:${user.password}`)

  const cloned = req.clone({
    setHeaders: { 'Authorization': `Basic ${authorization}` }
  })
  return next(cloned)
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = () => {
  const jwt = inject(JwtHelperService);
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (jwt.isTokenExpired(token)) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

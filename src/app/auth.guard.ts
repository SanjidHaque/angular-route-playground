import {Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';

export const authGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.login();
};

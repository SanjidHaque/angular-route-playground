import { Injectable } from '@angular/core';
import {delay, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;

  redirectUrl: string | null = null;

  login() {
    return of(true).pipe(
      delay(10)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

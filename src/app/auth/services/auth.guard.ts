import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // your service to get token
import { constants } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    const token = this.authService.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}

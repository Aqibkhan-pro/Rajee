import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { constants } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class StartedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const started = JSON.parse(localStorage.getItem(constants.Started) || 'false');
    if (started) {
      return this.router.createUrlTree(['auth/login']);
    }
    return true;
  }
}

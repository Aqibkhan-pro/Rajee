import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { constants } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class StartedGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  canActivate(): boolean | UrlTree {
    // Check if user has seen the started/onboarding page
    const hasSeenStarted = this.storageService.getItem(constants.Started);

    // Check if user is logged in
    const isLoggedIn = this.storageService.getItem('isLoggedIn');

    // If user hasn't seen the started page yet (first time opening app)
    if (!hasSeenStarted) {
      // Allow access to the started page
      return true;
    }

    // User has seen the started page before
    if (isLoggedIn) {
      // User is logged in, redirect to main
      return this.router.createUrlTree(['main']);
    } else {
      // User is not logged in, redirect to login
      return this.router.createUrlTree(['auth/login']);
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // Your authentication logic goes here
    const isLoggedIn = /* Your authentication check */ true; // Replace with your logic

    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      this.router.navigate(['/Login']);
      return false;
    }

    return true;
  }

  constructor(private router: Router) {}
}

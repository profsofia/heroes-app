import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanMatch {
  constructor(
    private authServ: AuthService,
    private route: Router
    ){}


    private checkAuthStatus(): boolean | Observable<boolean>{
      return this.authServ.checkAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if(!isAuthenticated) this.route.navigate(['./auth/login']);
        })
      )
    }




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    /*console.log('CanActivate');
    console.log({ route, state });
    return false;*/
    return this.checkAuthStatus();
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    /*
    console.log('CanMatch');
    console.log({ route, segments });
    return false;*/
    return this.checkAuthStatus();
  }
}

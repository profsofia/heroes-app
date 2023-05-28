import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanMatch {
  constructor(
    private authServ: AuthService,
    private route: Router
    ){}

  private checkAuth(): Observable<boolean>{
    return this.authServ.checkAuthentication()
      .pipe(
        tap( isAuthenticated => {
          if(isAuthenticated) this.route.navigate(['./']);
        }),
        map(isAuthentiated => !isAuthentiated),
      )
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuth();
    //return of(true);
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
      return this.checkAuth();
    //return of(true);
  }
}

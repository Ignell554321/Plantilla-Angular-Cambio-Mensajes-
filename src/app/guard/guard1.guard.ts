import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CrudServiceService } from '../servicios/crud-service.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanMatch, CanActivate {


  constructor(private service:CrudServiceService,private router:Router ){}


  private checkAuthStatus(): boolean | Observable<boolean> {

    return this.service.checkAutentication()
      .pipe(
        tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
        tap( isAuthenticated => {
          if ( !isAuthenticated ) {
            this.router.navigate(['cambioTextos'])
          }
        }),

      )

  }

/*
  private checkAuthStatus():Promise<boolean >{


    return this.service.checkAutentication()
    .pipe(
      tap( isAutenticated=>{
        
        if(!isAutenticated){
        
            this.route.navigate(['./auth/login'])
        }
      }),
      tap(isAutenticated => console.log('isAutenticated: ',isAutenticated))
    )


  }*/


  canMatch(route: Route, segments: UrlSegment[]): boolean  | Observable<boolean > {

    console.log(route,segments);
    //throw new Error('Method not implemented.');
    return this.checkAuthStatus();

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean > {
    console.log(route,state);
    //throw new Error('Method not implemented.');
    return this.checkAuthStatus();
  }

  
}

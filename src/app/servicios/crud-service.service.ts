import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Usuario } from '../entidades/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  private baseUrl=environment.baseUrl;
  private user?: Usuario;

  constructor(private http:HttpClient) {}

  get currentUser():Usuario| undefined{

    if(!this.user) return undefined;
    return structuredClone(this.user);

  }

  login():Observable<Usuario>{

    return this.http.get<Usuario>(`${this.baseUrl}:80/login`)
    .pipe(
      tap(user=>this.user=user),
      tap(user=> localStorage.setItem('token',user.token.toString()))
    );

  }

  checkAutentication(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<Usuario>(`${this.baseUrl}:80/login`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of(false) )
      );

  }

  /*
  checkAutentication():Observable<boolean> | boolean{

    if(!localStorage.getItem('token')) return of(false);

    const token =localStorage.getItem('token');

    return this.http.get<Usuario>(`${this.baseUrl}:80/login`)
    .pipe(
      tap(user=>this.user=user),
      map(user=> !!user),
      catchError( err => of(false) )
    );
  }*/


}

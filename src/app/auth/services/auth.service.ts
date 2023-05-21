import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environments.baseUrl;
  //lo ponemos como opcional porque al inicio de la app no existe ningún usuario
  private user?: User;
  constructor(private http: HttpClient) { }
  get currentUser(): User | undefined {
    if(!this.user) return undefined;
    //podemos usar el operador spread : le ayuda a expandir los iterables en elementos individuales
    return {...this.user};
  }
  login(email: string, password: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      tap( user => localStorage.setItem('token', 'askdhkjsahdkjs.kjasndjq3h21iuh32.osindiua29378347'))
    )
  }

  checkAuthentication(): Observable<boolean> | boolean{
    /**
     * Si el token es nulo regresamos falso, para decir que el usuario no se encuentra autenticado
     */
   if(!localStorage.getItem('token')){
    return false;
   }
   const token = localStorage.getItem('token');
   return this.http.get<User>(`${this.baseUrl}/users/1`)
   .pipe(
    tap(user => this.user = user),
    map(user => !!user),
    catchError(err => of(false))
   )


  }


  logout(){
    this.user = undefined;
    localStorage.clear();
  }
}

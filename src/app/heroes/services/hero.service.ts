import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/app/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
  private url = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.url}/heroes`);
  }


  getHeroById(id: string): Observable<Hero | undefined>{
   return this.http.get<Hero>(`${this.url}/heroes/${id}`)
   .pipe(
    catchError( e => of(undefined))
   )
  }

  getSuggestions(query : string): Observable<Hero[]>{
   return this.http.get<Hero[]>(`${this.url}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero : Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.url}/heroes`, hero);
  }
  updateHero(hero : Hero): Observable<Hero>{
    if(!hero.id) throw Error('Id Hero is required');
    return this.http.patch<Hero>(`${this.url}/heroes/${hero.id}`, hero);
  }
  deleteById(id: string): Observable<boolean>{
    return this.http.delete(`${this.url}/heroes/${id}`)
    .pipe(
      map(response => true),
      catchError(e => of(false)),

    );

  }
}

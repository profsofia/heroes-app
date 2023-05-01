import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroServ: HeroesService,
    private activatedRoute : ActivatedRoute,
    private route : Router
    ){}

  //implementamos el oninit para poder hacer una peticion http ni bien el componente este listo
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(1000),
      switchMap(({id})=> this.heroServ.getHeroById(id))
    ).subscribe(
      hero => {
        if( !hero) return this.route.navigate(['heroes/list'])
        this.hero = hero;
        //console.log(hero);
        return;
      }
    )
  }
  goList(): void{
    this.route.navigateByUrl('/heroes/list')
  }
}

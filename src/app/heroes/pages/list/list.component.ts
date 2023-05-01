import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{
public heroes : Hero[]=[];


constructor(private heroServ: HeroesService){}
  ngOnInit(): void {
    this.heroServ.getHeroes()
    .subscribe( hero => this.heroes = hero);
    console.log(this.heroes);
  }

}

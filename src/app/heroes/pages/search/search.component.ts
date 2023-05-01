import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
 public searchInput = new FormControl('');
 public heroes : Hero[] = [];
 public selectedHero?: Hero;

 constructor(private heroServ : HeroesService){}


 searchHero(){
  const value : string = this.searchInput.value || '';
  this.heroServ.getSuggestions(value)
  .subscribe(heroes => this.heroes = heroes)
 }
 onSelectedHero(event : MatAutocompleteSelectedEvent): void{
  console.log(event.option.value);
  if(!event.option.value){
    this.selectedHero = undefined;
    return;
  }
  const hero: Hero = event.option.value;
  this.searchInput.setValue(hero.superhero);
  this.selectedHero= hero;
 }
}

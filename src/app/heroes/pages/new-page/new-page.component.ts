import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html'
})
export class NewPageComponent {

  public formHeroes = new FormGroup({
    id:              new FormControl(''),
    superhero:       new FormControl<string>('', {nonNullable: true}),
    publisher:       new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:       new FormControl(''),
    first_appearance:new FormControl(''),
    characters:      new FormControl(''),
    alt_img:         new FormControl(''),

  });

public publishers =[
  {id: 'DC Comics', desc: 'DC - Comics'},
  {id: 'Marvel Comics', desc: 'Marvel - Comics'}
];


constructor(private hersoService: HeroesService){}

get currentHero(): Hero{
  const hero = this.formHeroes.value as Hero;
  return hero;
}
onSubmit(): void{
  //si el form no es valido, no hace nada
  if(this.formHeroes.invalid) return;

  //si existe id, entonces actualiza
  if(this.currentHero.id){
    this.hersoService.updateHero(this.currentHero).subscribe(
        hero =>{
        //TODO: MOSTRAR SNACKBAR
      });
      return;
  }
  // sino existe id entonces, lo crea con un hash
  this.hersoService.addHero( this.currentHero).subscribe(
    hero =>{
      //TODO: mostrar snackbar y navegar a /heroes/edit/hero.id
    });

}




}

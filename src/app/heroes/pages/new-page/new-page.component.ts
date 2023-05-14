import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html'
})
export class NewPageComponent implements OnInit {

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


constructor(
  private heroService: HeroesService,
  private activatedRoute : ActivatedRoute,
  private router : Router,
  private snackBar : MatSnackBar
  ){}


get currentHero(): Hero{
  const hero = this.formHeroes.value as Hero;
  return hero;
}
ngOnInit(): void {
  // si pasa esta condicion quiere decir que queremos crear un heroe
  if (!this.router.url.includes('edit')) return;

  this.activatedRoute.params
  .pipe(
    switchMap( ({id})=> this.heroService.getHeroById(id )),
  ).subscribe(
    hero =>{
      if (!hero) return this.router.navigateByUrl('/');
      this.formHeroes.reset(hero);
      return;
    }
  )
}
onSubmit(): void{
  //si el form no es valido, no hace nada
  if(this.formHeroes.invalid) return;

  //si existe id, entonces actualiza
  if(this.currentHero.id){
    this.heroService.updateHero(this.currentHero).subscribe(
        hero =>{

          this.showSnackbar(`${hero.superhero} updated!` )
        });
      return;
  }
  // sino existe id entonces, lo crea con un hash
  this.heroService.addHero( this.currentHero).subscribe(
    hero =>{
      //TODO: mostrar snackbar y navegar a /heroes/edit/hero.id
      this.showSnackbar(`${hero.superhero} created succefuly!`)
      this.router.navigate([`/heroes/edit/${hero.id}`])
    });

}
showSnackbar(message: string): void{
  this.snackBar.open(message, 'done', {duration: 2500});
}



}

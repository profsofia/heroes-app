import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

 @Input()
 public hero!: Hero;

 ngOnInit(): void {
  //para validar que los heroes no vengan vacios.
  if(!this.hero) throw new Error('Hero property is required');
}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { LayoutHeroeComponent } from './pages/layout-heroe/layout-heroe.component';
import { ListComponent } from './pages/list/list.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    HeroesComponent,
    LayoutHeroeComponent,
    ListComponent,
    NewPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

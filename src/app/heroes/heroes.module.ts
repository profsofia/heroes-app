import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { LayoutHeroeComponent } from './pages/layout-heroe/layout-heroe.component';
import { ListComponent } from './pages/list/list.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchComponent } from './pages/search/search.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    HeroesComponent,
    LayoutHeroeComponent,
    ListComponent,
    NewPageComponent,
    SearchComponent,
    CardComponent,
    // pipe para generar la url de la imagen
    HeroImagePipe,
    ConfirmDialogComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }

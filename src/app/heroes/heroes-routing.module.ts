import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHeroeComponent } from './pages/layout-heroe/layout-heroe.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutHeroeComponent,
    children:[
      {
        path:'new-hero',
        component:NewPageComponent
      },
      {
        path:'search-hero',
        component:SearchComponent
      },
      {
        path:'edit/:id',
        component:NewPageComponent
      },
      {
        path:'list',
        component:ListComponent
      },
      {
        path:':id',
        component:HeroesComponent //esta ruta, con el id va al final, sino nunca entraría en el resto de las rutas, es como **
      },
      {
        path:'**',
        component:ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }

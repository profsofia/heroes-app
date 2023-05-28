import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';



const routes : Routes=[
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(modulo => modulo.AuthModule),
    canActivate:[PublicGuard],
    canMatch:[PublicGuard]
  },
  {
    path:'heroes',
    loadChildren: ()=>import('./heroes/heroes.module').then(m => m.HeroesModule),
    //Para proteger las rutas
    canActivate:[AuthGuard],
    //pasa cada vez que se entra a una ruta padre y a las rutas hijas.
    canMatch:[AuthGuard]
  },
  {
    path:'404',
    component:Error404Component
  },
  {
    path:'',
    redirectTo:'heroes',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
   RouterModule
  ]
})
export class AppRoutingModule { }

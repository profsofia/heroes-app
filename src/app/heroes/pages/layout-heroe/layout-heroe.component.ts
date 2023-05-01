import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-heroe',
  templateUrl: './layout-heroe.component.html'
})
export class LayoutHeroeComponent {


  public sidebarItems =[
    {label:'Listado', icon:'label', url: './list'},
    {label:'Añadir', icon:'add', url: './new-hero'},
    {label:'Buscar', icon:'search-hero', url: './search-hero'},
  ]
}

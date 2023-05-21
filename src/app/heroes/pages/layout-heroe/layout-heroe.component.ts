import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  constructor(
    private authService: AuthService,
    private router: Router

    ){}
  onLoggout(){
   this.authService.logout();
   this.router.navigate(['/auth/login']);
  }
  get user(): User| undefined{
    return this.authService.currentUser;
  }
}

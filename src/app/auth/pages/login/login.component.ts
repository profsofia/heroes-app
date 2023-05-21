import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private authServ : AuthService,
    private route: Router
    ){

  }
  onLoggin(): void{
   this.authServ.login('sofia@gmail.com','123456').subscribe(
    user =>{
     this.route.navigate(['/'])
    }
   );
  }
}

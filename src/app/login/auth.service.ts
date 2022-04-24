import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAuthenticado: boolean = false;
  constructor(private router: Router){} 
    fazerLogin(usuario: usuario){
      if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456'){

       this.usuarioAuthenticado = true;
       this.router.navigate(['/']);
      }
      else{
        this.usuarioAuthenticado =false;
      }
    }
   }

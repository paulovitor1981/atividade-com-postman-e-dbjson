import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { usuario } from 'src/app/login/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    private usuario: usuario = new usuario;

  constructor(private authService: AuthService){}
   ngOnInit(): void {
     
   }
  fazerlogin(){
  
   this.authService.fazerLogin(this.usuario);
  }}

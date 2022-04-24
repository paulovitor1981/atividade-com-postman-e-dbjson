import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homecomponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
    homecomponent, 
  ],

  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgModule,
    HttpClientModule,
   LoginComponent, 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

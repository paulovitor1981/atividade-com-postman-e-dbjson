
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasService } from './services/noticias.service';
import { homecomponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
 { path:"", component: homecomponent},
 { path: "noticias" , component: NoticiasService},
 { path:"login" , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

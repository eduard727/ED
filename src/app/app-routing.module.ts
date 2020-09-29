import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Los imports para el ROUTING
import {GalleryComponent} from './gallery/gallery.component'
import {ShoppingComponent} from './shopping/shopping.component'
import {InicioComponent} from './inicio/inicio.component';

//imports de font awesome
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
  {
    path:'shopping',
    component: ShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,FontAwesomeModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

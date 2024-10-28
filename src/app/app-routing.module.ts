import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [
/*  */
   {
    path: 'cines',
    loadChildren: () => import('./cines/cines.module').then( m => m.CinesModule),
  },
    {
    path: 'salas',
    loadChildren: () => import('./salas/salas.module').then( m => m.SalasModule),
  },
   {
     path: 'favoritos',
     loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosModule),
  },
  {
  path: 'populares',
  loadChildren: () => import('./populares/populares.module').then( m => m.PopularesModule),
},
{
  path: 'carrito',
  loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoModule),
},

  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '',
    redirectTo: 'cines',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

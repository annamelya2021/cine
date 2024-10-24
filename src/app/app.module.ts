import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CinesComponent } from './cines/pages/cines.component';
import { FavoritosComponent } from './favoritos/pages/favoritos.component';
import { CarritoComponent } from './carrito/pages/carrito.component';
import { PopularesComponent } from './populares/pages/populares.component';

@NgModule({
  declarations: [
    AppComponent,
    CinesComponent,
    FavoritosComponent,
    CarritoComponent,
    PopularesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

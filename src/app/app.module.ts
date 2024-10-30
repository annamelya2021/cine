import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CinesComponent } from './cines/pages/cines.component';
import { FavoritosComponent } from './favoritos/pages/favoritos.component';
import { CarritoComponent } from './carrito/pages/carrito.component';
import { PopularesComponent } from './populares/pages/populares.component';
import { CinesModule } from './cines/cines.module';
import { SalasComponent } from './salas/salas.component';
import { SalasModule } from './salas/salas.module';
import { ReserveSeatsComponent } from './reserve-seats/reserve-seats.component';
import { ReserveSeatsModule } from './reserve-seats/reserve-seats.module';

@NgModule({
  declarations: [
    AppComponent,
    CinesComponent,
    FavoritosComponent,
    CarritoComponent,
    PopularesComponent,
    SalasComponent,
    ReserveSeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CinesModule,
    SalasModule,
    ReserveSeatsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

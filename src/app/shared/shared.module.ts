import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingSpinerComponent } from './components/loadingSpiner/loadingSpiner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './pages/error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    NavbarComponent,
    Error404Component,
    LoadingSpinerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    Error404Component,
    LoadingSpinerComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class SharedModule {}

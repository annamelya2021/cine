import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularesComponent } from './pages/populares.component';

const routes: Routes = [
   {
    path: '',
    component: PopularesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularesRoutingModule { }

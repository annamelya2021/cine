import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReserveSeatsComponent } from './reserve-seats.component';

const routes: Routes = [
   {
    path: '',
    component:  ReserveSeatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReserveSeatsRoutingModule { }

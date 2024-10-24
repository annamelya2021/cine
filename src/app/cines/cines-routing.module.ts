import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinesComponent } from './pages/cines.component';

const routes: Routes = [
   {
    path: '',
    component: CinesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinesRoutingModule { }

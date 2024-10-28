import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinesRoutingModule } from './cines-routing.module';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CardComponent,
    CarouselComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CinesRoutingModule
  ],
  exports: [
    CardComponent,
    CarouselComponent,
    ModalComponent
  ],
})
export class CinesModule { }

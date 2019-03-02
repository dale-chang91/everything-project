import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementRoutingModule } from './movement-routing.module';
import { MovementComponent } from './movement.component';

@NgModule({
  declarations: [MovementComponent],
  imports: [
    CommonModule,
    MovementRoutingModule
  ]
})
export class MovementModule { }

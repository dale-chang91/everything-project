import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapoeiraRoutingModule } from './capoeira-routing.module';
import { CapoeiraComponent } from './capoeira.component';

@NgModule({
  declarations: [
    CapoeiraComponent
  ],
  exports: [
    CapoeiraComponent
  ],
  imports: [
    CommonModule,
    CapoeiraRoutingModule
  ]
})
export class CapoeiraModule { }

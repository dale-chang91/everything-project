import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapoeiraRoutingModule } from './capoeira-routing.module';
import { CapoeiraComponent } from './capoeira.component';
import { CapoeiraMovesComponent } from './capoeira-moves/capoeira-moves.component';
import { CapoeiraSongsComponent } from './capoeira-songs/capoeira-songs.component';
import { CapoeiraFlowGeneratorComponent } from './capoeira-flow-generator/capoeira-flow-generator.component';

@NgModule({
  declarations: [
    CapoeiraComponent,
    CapoeiraFlowGeneratorComponent,
    CapoeiraMovesComponent,
    CapoeiraSongsComponent
  ],
  exports: [
    CapoeiraComponent, 
    CapoeiraFlowGeneratorComponent,
    CapoeiraMovesComponent,
    CapoeiraSongsComponent
  ],
  imports: [
    CommonModule,
    CapoeiraRoutingModule
  ]
})
export class CapoeiraModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapoeiraComponent } from './capoeira.component';
import { CapoeiraMovesComponent } from './capoeira-moves/capoeira-moves.component';
import { CapoeiraSongsComponent } from './capoeira-songs/capoeira-songs.component';
import { CapoeiraFlowGeneratorComponent } from './capoeira-flow-generator/capoeira-flow-generator.component';

const routes: Routes = [
  {
    path: '',
    component: CapoeiraComponent
  },
  {
    path: 'moves',
    component: CapoeiraMovesComponent
  },
  {
    path: 'songs',
    component: CapoeiraSongsComponent
  },
  {
    path: 'flow',
    component: CapoeiraFlowGeneratorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CapoeiraRoutingModule { }

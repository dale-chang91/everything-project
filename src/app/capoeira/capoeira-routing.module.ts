import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapoeiraComponent } from './capoeira.component';

const routes: Routes = [
  {
    path: 'capoeira',
    component: CapoeiraComponent
  }
];

@NgModule({
  declarations: [
    CapoeiraComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CapoeiraRoutingModule { }

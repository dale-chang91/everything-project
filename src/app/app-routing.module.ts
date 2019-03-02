import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './core/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'capoeira',
    loadChildren: './capoeira/capoeira.module#CapoeiraModule'
  },
  {
    path: 'computer-organizataion',
    loadChildren: './computer-organization/computer-organization.module#ComputerOrganizationModule'
  },
  {
    path: 'movement',
    loadChildren: './movement/movement.module#MovementModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

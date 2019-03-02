import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerOrganizationRoutingModule } from './computer-organization-routing.module';
import { ComputerOrganizationComponent } from './computer-organization.component';

@NgModule({
  declarations: [ComputerOrganizationComponent],
  imports: [
    CommonModule,
    ComputerOrganizationRoutingModule
  ]
})
export class ComputerOrganizationModule { }

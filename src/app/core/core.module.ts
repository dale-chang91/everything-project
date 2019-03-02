import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Angular Material
 */
import { MatCardModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContributorComponent } from './contributor/contributor.component';
import { ContributorListComponent } from './contributor/contributor-list/contributor-list.component';
import { ModuleIntroComponent } from './welcome/module-intro/module-intro.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ContributorComponent,
    ContributorListComponent,
    ModuleIntroComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ]
})
export class CoreModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Angular Material
 */
import { MatCardModule } from '@angular/material';

/**
 * Central App
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

/**
 * Feature Module
 */
import { CapoeiraModule } from './capoeira/capoeira.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    CoreModule,
    MatCardModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

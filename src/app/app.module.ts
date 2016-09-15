import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing.ts';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroService } from './heroes/hero.service';

var css = require('../scss/app.scss');

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],

  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],

  providers: [
    HeroService
  ],

  bootstrap: [
    AppComponent
  ]

})

export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { PokemonListComponent } from './site-layout/pokemon-list/pokemon-list.component';
import { DetailseComponent } from './site-layout/pokemon-list/detailse/detailse.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchPipe} from "./site-layout/pokemon-list/search.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    PokemonListComponent,
    DetailseComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

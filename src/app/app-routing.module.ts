import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteLayoutComponent} from "./site-layout/site-layout.component";
import {PokemonListComponent} from "./site-layout/pokemon-list/pokemon-list.component";
import {DetailseComponent} from "./site-layout/pokemon-list/detailse/detailse.component";

const routes: Routes = [{
  path: '', component: SiteLayoutComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: PokemonListComponent, children: [
        {path: ':id', component: DetailseComponent}
      ]}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

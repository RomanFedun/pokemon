import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {ServeService} from "../serve.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {

  pokemonList: PokemonListComponent

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.pokemonList.fetch(ServeService.urlList)

  }

}

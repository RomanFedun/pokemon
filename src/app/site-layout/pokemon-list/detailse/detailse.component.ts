import {Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";
import {PokemonListComponent} from "../pokemon-list.component";
import {ServeService} from "../../../serve.service";

@Component({
  selector: 'app-detailse',
  templateUrl: './detailse.component.html',
  styleUrls: ['./detailse.component.scss']
})
export class DetailseComponent implements DoCheck {

  pokemon: PokemonListComponent

  id = 0
  details$: any

  constructor(private router: Router,
              private serveService: ServeService) {
  }


  ngDoCheck() {
    this.id = this.serveService.poke_id
    this.details$ = this?.serveService?.dataListOfPokemon?.[this?.id - 1]

  }

}

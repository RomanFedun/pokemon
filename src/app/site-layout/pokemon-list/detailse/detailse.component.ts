import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PokemonListComponent} from "../pokemon-list.component";
import {ServeService} from "../../../serve.service";

@Component({
  selector: 'app-detailse',
  templateUrl: './detailse.component.html',
  styleUrls: ['./detailse.component.scss']
})
export class DetailseComponent implements OnInit, AfterViewInit, DoCheck {

  pokemon: PokemonListComponent

  id: any
  details$

  constructor(private router: Router,
              private serveService: ServeService  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.id = this.serveService.getId()
    this.details$ = this.serveService.dataListOfPokemon[this.id - 1]
    console.clear()

  }

  ngDoCheck() {
    this.id = this.serveService.getId()
    if (!this.id) {
     // this.pokemon.onLoadData(1)
      this.id = 1
      this.details$.imageSrc = ''
    } else {

      this.details$ = this.serveService.dataListOfPokemon[this.id - 1]
      console.clear()

    }

  }

}

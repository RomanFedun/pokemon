import {Component, OnInit} from '@angular/core';
import {ServeService} from "../../serve.service";
import { PokemonData} from "../../interface";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  ImgSrc = this.serveService.urlImagesSrc

  poke_id = 0
  pokemonList = []
  nextUrl = ''
  pokemonData: PokemonData = {
    imageSrc: '',
    pokeName: '',
    id: 0,
    type: [],
    Attack: 0,
    Defence: 0,
    HP: 0,
    SPAttack: 0,
    SPDefence: 0,
    Speed: 0,
    Weight: 0,
    totalMoves: 0
  }

  pokeSrc$ = false
  pokeName
  typesArr: any = []

  pokeData: object
  image: File
  loading = false
  reloading = false
  searchByType = ''

  constructor(private serveService: ServeService) {
    this.pokemonList = this.serveService.dataStart

  }

  ngOnInit() {

    this.fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12')

  }


  fetch(source) {

   this.serveService.loadList(source).subscribe(card => {
        this.pokeData = card;
        this.nextUrl = card.next;
      }, error => console.error(error),
      () => {
        // @ts-ignore
        this.pokeData.results.map((item) => {
          console.log(item.url);
          this.serveService.loadData(item.url).subscribe(data => {
              this.pokeName = data.forms[0].name;
              data.types.map((i) => {
                this.typesArr.push(i.type.name)
              });

              this.pokemonData.pokeName = data.forms[0].name
              this.pokemonData.id = data.id
              this.pokemonData.type = this.typesArr
              this.pokemonData.Attack = data.stats[1].base_stat
              this.pokemonData.Defence = data.stats[2].base_stat
              this.pokemonData.HP = data.stats[0].base_stat
              this.pokemonData.SPAttack = data.stats[3].base_stat
              this.pokemonData.SPDefence = data.stats[4].base_stat
              this.pokemonData.Speed = data.stats[5].base_stat
              this.pokemonData.Weight = data.weight
              this.pokemonData.totalMoves = data.moves.length


            },
            error => console.error(error),
            () => {
              this.pokemonData.imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonData?.id}.png`;

              this.pokemonData.type = this.typesArr;
              this.pokeSrc$ = true;
              this.typesArr = [];

              this.pokemonList[this.pokemonData?.id - 1] = this.pokemonData


              this.pokemonData = {
                imageSrc: '',
                pokeName: '',
                id: 0,
                type: [],
                Attack: 0,
                Defence: 0,
                HP: 0,
                SPAttack: 0,
                SPDefence: 0,
                Speed: 0,
                Weight: 0,
                totalMoves: 0
              }
            }
          )
        })
      })
  }


  loadMore() {
    this.fetch(this.nextUrl)
  }

  onLoadData(_id) {
    this.serveService.dataListOfPokemon = this.pokemonList

    this.serveService.poke_id = _id

  }

  clearInput() {
    this.searchByType = ''
  }
}

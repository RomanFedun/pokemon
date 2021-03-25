import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {ServeService} from "../../serve.service";
import { Subscription} from "rxjs";
import { PokemonData} from "../../interface";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, AfterViewInit, DoCheck, AfterViewChecked {

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
  oSub: Subscription
  loading = false
  reloading = false
  searchByType = ''

  constructor(private serveService: ServeService) {
  }

  ngOnInit() {
    this.fetch(ServeService.urlList)


  }

  ngDoCheck() {
    console.clear()

  }


  ngAfterViewInit(): any {


  }

  ngAfterViewChecked(){
    console.clear()

  }


  fetch(source) {

   this.oSub =  this.serveService.loadList(source).subscribe(card => {
        this.pokeData = card
        this.nextUrl = card.next
      }, error => console.error(error),
      () => {
        // @ts-ignore
        this.pokeData.results.map((item) => {
          this.serveService.loadData(item.url).subscribe(data => {
              this.pokeName = data.forms[0].name
              data.types.map((i) => {
                this.typesArr.push(i.type.name)
              })

              this.pokemonData.pokeName = data.forms[0].name
              this.pokemonData.id = data.id
              this.pokemonData.type = this.typesArr
              this.pokemonData.Attack = data.stats[1].base_stat
              this.pokemonData.Defence = data.stats[2].base_stat
              this.pokemonData.HP = data.stats[0].base_stat
              this.pokemonData.SPAttack = data.stats[3].base_stat
              this.pokemonData.SPDefence = data.stats[4].base_stat
              this.pokemonData.Speed = data.stats[5].base_stat
              this.pokemonData.imageSrc = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`
              this.pokemonData.Weight = data.weight
              this.pokemonData.totalMoves = data.moves.length

              this.pokemonList[this.pokemonData.id - 1] = this.pokemonData

            },
            error => console.error(error),
            () => {
              this.pokemonData.type = this.typesArr
              this.pokeSrc$ = true
              this.typesArr = []

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
              console.clear()
            }
          )
        })
        // @ts-ignore
        this.pokeData.results = []
        this.serveService.dataListOfPokemon = this.pokemonList
        this.pokeData = {}

      })

  }


  loadMore() {
    this.fetch(this.nextUrl)
  }

  onLoadData(_id) {
    this.serveService.poke_id = _id
  }


}

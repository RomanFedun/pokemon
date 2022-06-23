import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  urlImagesSrc = 'https://pokeres.bastionbot.org/images/pokemon'

  poke_id = 1

  dataListOfPokemon: any

 dataStart = [
   {
     Attack: 49,
     Defence: 49,
     HP: 45,
     SPAttack: 65,
     SPDefence: 65,
     Speed: 45,
     Weight: 69,
     id: 1,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/1.png",
     pokeName: "bulbasaur",
     totalMoves: 78,
     type: ["grass", "poison"]
   },
   {
     Attack: 62,
     Defence: 63,
     HP: 60,
     SPAttack: 80,
     SPDefence: 80,
     Speed: 60,
     Weight: 130,
     id: 2,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/2.png",
     pokeName: "ivysaur",
     totalMoves: 66,
     type: ["grass", "poison"]
   },
   {
     Attack: 82,
     Defence: 83,
     HP: 80,
     SPAttack: 100,
     SPDefence: 100,
     Speed: 80,
     Weight: 1000,
     id: 3,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/3.png",
     pokeName: "venusaur",
     totalMoves: 77,
     type: ["grass", "poison"]
   },
   {
     Attack: 52,
     Defence: 43,
     HP: 39,
     SPAttack: 60,
     SPDefence: 50,
     Speed: 65,
     Weight: 85,
     id: 4,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/4.png",
     pokeName: "charmander",
     totalMoves: 93,
     type: ["fire"]
   },
   {
     Attack: 64,
     Defence: 58,
     HP: 58,
     SPAttack: 80,
     SPDefence: 65,
     Speed: 80,
     Weight: 190,
     id: 5,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/5.png",
     pokeName: "charmeleon",
     totalMoves: 84,
     type: ["fire"]
   },
   {
     Attack: 84,
     Defence: 78,
     HP: 78,
     SPAttack: 109,
     SPDefence: 85,
     Speed: 100,
     Weight: 905,
     id: 6,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/6.png",
     pokeName: "charizard",
     totalMoves: 108,
     type: ["fire", "flying"]
   },
   {
     Attack: 48,
     Defence: 65,
     HP: 44,
     SPAttack: 50,
     SPDefence: 64,
     Speed: 43,
     Weight: 90,
     id: 7,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/7.png",
     pokeName: "squirtle",
     totalMoves: 91,
     type: ["water"]
   },
   {
     Attack: 63,
     Defence: 80,
     HP: 59,
     SPAttack: 65,
     SPDefence: 80,
     Speed: 58,
     Weight: 225,
     id: 8,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/8.png",
     pokeName: "wartortle",
     totalMoves: 76,
     type: ["water"]
   },
   {
     Attack: 83,
     Defence: 100,
     HP: 79,
     SPAttack: 85,
     SPDefence: 105,
     Speed: 78,
     Weight: 855,
     id: 9,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/9.png",
     pokeName: "blastoise",
     totalMoves: 93,
     type: ["water"]
   },
   {
     Attack: 30,
     Defence: 35,
     HP: 45,
     SPAttack: 20,
     SPDefence: 20,
     Speed: 45,
     Weight: 29,
     id: 10,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/10.png",
     pokeName: "caterpie",
     totalMoves: 5,
     type: ["bug"]
   },
   {
     Attack: 20,
     Defence: 55,
     HP: 50,
     SPAttack: 25,
     SPDefence: 25,
     Speed: 30,
     Weight: 99,
     id: 11,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/11.png",
     pokeName: "metapod",
     totalMoves: 5,
     type: ["bug"]
   },
   {
     Attack: 45,
     Defence: 50,
     HP: 60,
     SPAttack: 90,
     SPDefence: 80,
     Speed: 70,
     Weight: 320,
     id: 12,
     imageSrc: "https://pokeres.bastionbot.org/images/pokemon/12.png",
     pokeName: "butterfree",
     totalMoves: 77,
     type: ["bug", "flying"]
   }
 ]

  constructor(private http: HttpClient) { }

  loadList(url): Observable<any>{
    return this.http.get(`${url}.json`)
    }

  loadData(url): Observable<any>{
    return this.http.get(`${ url }`);
  }

}



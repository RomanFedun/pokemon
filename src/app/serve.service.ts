import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Card} from "./interface";



@Injectable({
  providedIn: 'root'
})
export class ServeService {
  static urlList = 'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0'
  urlImagesSrc = 'https://pokeres.bastionbot.org/images/pokemon'

  poke_id: number

  public dataListOfPokemon: any


  constructor(private http: HttpClient) { }

  loadList(url): Observable<any>{
    return this.http.get(`${url}.json`)

    }


  loadData(url): Observable<any>{
    return this.http.get(`${url}`)
  }

  getId () {
     return this.poke_id
  }


}



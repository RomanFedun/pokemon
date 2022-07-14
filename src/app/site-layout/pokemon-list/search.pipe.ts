import {Pipe, PipeTransform} from "@angular/core";
import {PokemonData} from "../../interface";

@Pipe({
  name: 'searchType'
})

export class SearchPipe implements PipeTransform{
  transform(data: PokemonData[], search= ''): PokemonData[] {
    if (!search.trim()) {
      return data
    } else {

      return data.filter(text => {

        return text.type.join(' ').toLowerCase().includes(search.toLowerCase( ))
      })
  }
}
}

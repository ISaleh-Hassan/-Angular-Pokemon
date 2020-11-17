import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { };

  getMultiplePokemon():Promise<any>{

    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=10").toPromise();
  }
  getPokemon(url : string):Promise<any>{
    return this.http.get(url).toPromise();
  }
}

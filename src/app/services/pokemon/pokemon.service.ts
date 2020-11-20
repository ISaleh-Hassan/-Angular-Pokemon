import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { };

  getMultiplePokemon():Promise<any>{

    return this.http.get(`${environment.baseUrl}/api/v2/pokemon?limit=1000`).toPromise();
  }
  getPokemonByUrl(url : string):Promise<any>{
    return this.http.get(url).toPromise();
  }

  getPokemonById(pokemonId:any):Promise<any>{
    return this.http.get(`${environment.baseUrl}/api/v2/pokemon/${pokemonId}`).toPromise();
  }
}

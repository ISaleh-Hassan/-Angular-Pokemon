import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  pokemonList: any[] = this.getPokemonList();

  constructor() { }

  save(session: any){
    localStorage.setItem('sp_session',JSON.stringify(session));
  }

  get(): any {
    const savedSession = localStorage.getItem('sp_session');
    return savedSession ? JSON.parse(savedSession) : false;
  }

  getPokemonList(): any {
    const savedSession = localStorage.getItem('pokemonlist');
    return savedSession ? JSON.parse(savedSession) : [];
  }

  addPokemon(pokemon:any){
    this.pokemonList.push(pokemon);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loggedInUser = new BehaviorSubject<string>(this.get().username);
  private loginStatus = new BehaviorSubject<boolean>(this.hasSession());

  pokemonList: any[] = this.getPokemonList();

  constructor() { }

  save(session: any){
    localStorage.setItem('sp_session',JSON.stringify(session));
    this.loggedInUser.next(session.username);
    this.loginStatus.next(true);
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

  get isLoggedInUser() {
    return this.loggedInUser.asObservable();
  }

  get isLoggedIn(){
    return this.loginStatus.asObservable();
  }

  hasSession(){
    const savedSession = localStorage.getItem('sp_session');  
    return savedSession ? true :false;
  }
}

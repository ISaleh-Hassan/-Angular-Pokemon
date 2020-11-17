import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  save(token: string){
    localStorage.setItem('sp_jwt',token)
  }

  get(): string{
    return localStorage.getItem('sp_jwt') || '';
  }
  
}

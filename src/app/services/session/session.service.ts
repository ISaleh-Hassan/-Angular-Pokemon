import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  save(session: any){
    localStorage.setItem('sp_session',JSON.stringify(session));
  }

  get(): any {
    const savedSession = localStorage.getItem('sp_session');
    return savedSession ? JSON.parse(savedSession) : false;
  }
  
}

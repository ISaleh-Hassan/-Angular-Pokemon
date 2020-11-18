import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) {
  }
   register(user:any): Promise<any>{
    return this.http.post(`${environment.apiUrl}/v1/api/users/register`,{
      user:{...user}
    }).toPromise();
  }

  login(user:any): Promise<any>{
    return this.http.post(`${environment.apiUrl}/v1/api/users/login`,{
      user:{...user}
    }).toPromise();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getSurveys(): Promise<any>{
    return this.http.get( `${environment.apiUrl}/v1/api/surveys` ).toPromise();
  }

  getSurveyById(surveyId:any): Promise<any>{
    return this.http.get( `${environment.apiUrl}/v1/api/surveys/${surveyId}` ).toPromise();
  }

}

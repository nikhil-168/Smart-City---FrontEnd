import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   baseUrl = 'http://localhost:8080'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  registerCitizen(citizen: object): Observable<HttpResponse<any>> {
    console.log('inside service');
    console.log(citizen);
    return this.http.post(
      `${this.baseUrl}/citizen`,citizen ,{ observe: 'response' }
    );
  }
}

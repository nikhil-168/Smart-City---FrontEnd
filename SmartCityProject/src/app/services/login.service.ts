import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8080'; // Update with your actual backend URL

 constructor(private http: HttpClient) {}

 loginCitizen(email: String, password: String): Observable<HttpResponse<any>> {
   console.log('inside login citizen');
   const apiUrl = `${this.baseUrl}/citizen/${email}/${password}`;
    return this.http.get(
      apiUrl, {observe: 'response'});
 }
}

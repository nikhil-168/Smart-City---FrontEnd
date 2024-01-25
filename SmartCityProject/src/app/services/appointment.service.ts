import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
   baseUrl = 'http://localhost:8080'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  bookAppointment(citizen: object) {
    console.log('inside service');
    console.log(citizen);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem("token"), // Add any additional headers as needed
    });

    console.log("JWT TOKEN:"+localStorage.getItem("token"))

    //Set headers in request options
    const requestOptions = {
      headers: headers,
    }

    return this.http.post(
      `${this.baseUrl}/appointment`, citizen, requestOptions
    );
  }
}

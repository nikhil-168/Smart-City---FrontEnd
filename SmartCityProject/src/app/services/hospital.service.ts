import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  baseUrl = 'http://localhost:8080'; // Update with your actual backend URL

  constructor(private httpClient: HttpClient) {
  }

  getHospitals() {
    console.log('inside Hospitals page');
    console.log(localStorage.getItem("token"));
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem("token"), // Add any additional headers as needed
    });

    //Set headers in request options
    const requestOptions = {
      headers: headers,
    }

    //Make http request
    return this.httpClient.get(`${this.baseUrl}/hospital`,  requestOptions);
  }

}

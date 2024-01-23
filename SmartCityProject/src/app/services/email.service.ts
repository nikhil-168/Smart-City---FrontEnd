// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
   baseUrl = 'http://localhost:8080'; // Replace with your backend server URL

  constructor(private http: HttpClient) {}

  getOtp(email: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/email/${email}`;
    return this.http.get(apiUrl);
  }

  // Add a new method for verifying OTP on the frontend
  verifyOtp(enteredOtp: string, expectedOtp: string): boolean {
    return enteredOtp === expectedOtp;
  }
}

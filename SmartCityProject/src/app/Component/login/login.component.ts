import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: String = "";
  password: String = "";

  constructor(
    private service: LoginService ,
    private router: Router
  ) {}

  submitted = false;
  
  onSubmit() {
    this.submitted = true;
    this.loginCitizen();
  }
  loginCitizen() {
    this.service.loginCitizen(this.email, this.password).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Login Response:', response);


        if (response.status==200) {
          // Handle the token, e.g., save it to localStorage, navigate to another page, etc.
          console.log('Successfull login');

          // Example: Save token to localStorage
          localStorage.setItem('token', response.body.message);

          console.log('Navigating to Health Service page');


          // Example: Navigate to another page (replace with your actual route)
          // window.location.reload();
           this.router.navigate(['/HealthService']);
        }
      },
      error => {
        console.error('Error during registration:', error.error.message);
        alert(error.error.message);
        // Handle error, show a message, etc.
      }
    );
  }
}

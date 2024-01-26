import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent {

  appointmentDetails = {
  
    date: '',
    name: '',
    services: '',
    slot: ''
  };

  minDate = new Date().toISOString().split('T')[0];

  constructor(private appointmentService: AppointmentService,private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && 'hospital' in state) {
      console.log(state['hospital']);
      this.appointmentDetails.name = state['hospital']
    }
  }

  submitted = false;
  submitAppointment() {
    this.submitted = true;
    this.bookAppointment();
  }

  bookAppointment() {
    // Implement the logic to submit the appointment details (e.g., send to server, save to database)
    console.log('Appointment Details:', this.appointmentDetails);
    this.appointmentService.bookAppointment(this.appointmentDetails).subscribe(
      (response: any) => {
        console.log('Registration Response:', response.message);


        if (response.message=="Appointment booked successfully....") {
          // Handle the token, e.g., save it to localStorage, navigate to another page, etc.
          alert("Appointment booked successfully")
          this.router.navigate(["/Home"])
        }
      },
      error => {
        console.error('Error during registration:', error.error);
        // Handle error, show a message, etc.
      }
    );
  }



}

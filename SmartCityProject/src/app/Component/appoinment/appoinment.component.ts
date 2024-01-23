import { Component } from '@angular/core';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent {

  appointmentDetails = {
  
    appointmentDate: '',
    email: '',
    hospitalName: '',
    services: '',
    timeSlot: ''
  };

  submitAppointment() {
    // Implement the logic to submit the appointment details (e.g., send to server, save to database)
    console.log('Appointment Details:', this.appointmentDetails);
  }

}

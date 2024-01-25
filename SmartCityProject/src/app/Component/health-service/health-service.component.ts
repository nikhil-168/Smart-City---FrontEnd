import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-service',
  templateUrl: './health-service.component.html',
  styleUrl: './health-service.component.css'
})
export class HealthServiceComponent implements OnInit {
  bookAppointment(arg0: { item: any; }) {
    // alert("Appointment booked for:"+arg0.item.name);
    this.router.navigate(['Appointment'],  { state: { hospital: arg0.item.name } })
  }
  hospitals: any[] = [];
  
  constructor(private hospitalService: HospitalService, private router: Router) {

  }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(data => {
      console.log(data);
      // Check if data is an array
      if (Array.isArray(data)) {
        this.hospitals = data;
      } else {
        console.error('Unexpected data format. Expected an array.');
      }
    })
  }

}

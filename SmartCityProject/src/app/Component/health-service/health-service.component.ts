import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-health-service',
  templateUrl: './health-service.component.html',
  styleUrl: './health-service.component.css'
})
export class HealthServiceComponent implements OnInit {
  bookAppointment(arg0: { item: any; }) {
    alert("Appointment booked for:"+arg0.item.name);
    
  }
  hospitals: any[] = [];
  
  constructor(private hospitalService: HospitalService) {

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

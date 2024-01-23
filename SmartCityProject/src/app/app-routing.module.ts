import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ServicesComponent } from './Component/servicesoffer/services.component';
import { ReviewComponent } from './Component/review/review.component';
import { FAQComponent } from './Component/faq/faq.component';
import { ContactComponent } from './Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { ElectricityServiceComponent } from './Component/electricity-service/electricity-service.component';
import { HealthServiceComponent } from './Component/health-service/health-service.component';
import { AppoinmentComponent } from './Component/appoinment/appoinment.component';
import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';
import { RegistrationComponent } from './Component/registration/registration.component';

const routes: Routes = [

  {
    path:'Home',
    component:HomeComponent
  },

  {
  path:'About',
  component:AboutComponent,
  pathMatch:'full'
  },

  { path: '', 
  redirectTo: '/Home', 
  pathMatch: 'full'
 },

  {
    path:'Services',
    component:ServicesComponent
  },

  {
    path:'Review',
    component:ReviewComponent
  },

  {
    path:'FAQ',
    component:FAQComponent
  },

  {
    path:'Contact',
    component:ContactComponent
  },

  {
    path:'Register',
    component:RegistrationComponent
  },
  
  {
    path:'Registration',
    component:EmailVerificationComponent ,
    pathMatch:'full'
  },

  {
  path:'Login',
  component:LoginComponent,

  },

  {
  path:'ElectricityService',
  component:ElectricityServiceComponent,
  pathMatch:'full'
  },

  {
    path:'HealthService',
    component:HealthServiceComponent,
    pathMatch:'full'
  },

  {
    path:'Appointment',
    component:AppoinmentComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ReviewComponent } from './Component/review/review.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ServicesComponent } from './Component/servicesoffer/services.component';
import { FAQComponent } from './Component/faq/faq.component';
import { ContactComponent } from './Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ElectricityServiceComponent } from './Component/electricity-service/electricity-service.component';
import { HealthServiceComponent } from './Component/health-service/health-service.component';
import { AppoinmentComponent } from './Component/appoinment/appoinment.component';
import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';
import { RegistrationComponent } from './Component/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FAQComponent,
    ContactComponent,
    LoginComponent,
    FooterComponent,
    ElectricityServiceComponent,
    HealthServiceComponent,
    AppoinmentComponent,
    EmailVerificationComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// email-verification.component.ts
import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent {
  email: string = '';
  otpReceived: boolean = false;
  enteredOtp: string = '';
  expectedOtp: string = ''; // Store the expected OTP on the frontend
  verificationSuccess: boolean = false;
  verificationError: string = '';

  constructor(private emailService: EmailService, private router: Router) {}

  getOtp() {
    this.emailService.getOtp(this.email).subscribe(
      response => {
        console.log('OTP Received:', response);
        this.expectedOtp = response.message; // Store the expected OTP
        this.otpReceived = true;
      },
      error => {
        console.error('Error getting OTP:', error);
        this.verificationError = 'Failed to get OTP. Please try again.';
      }
    );
  }

  verifyOtp() {
    const isVerificationSuccessful = this.emailService.verifyOtp(this.enteredOtp, this.expectedOtp);
    if (isVerificationSuccessful) {
      console.log('OTP Verification Successful');
      this.verificationSuccess = true;
      this.verificationError = ''; // Clear any previous error messages
      localStorage.setItem("Email", this.email);
      this.router.navigate(['/Register']);

    } else {
      console.error('Invalid OTP');
      this.verificationError = 'Invalid OTP. Please try again.';
      this.verificationSuccess = false; // Reset success flag
    }
  }
}

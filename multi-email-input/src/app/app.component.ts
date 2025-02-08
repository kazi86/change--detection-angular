import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailForm: FormGroup;
  emails: string[] = []; // List of added emails

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      emailInput: ['', [Validators.email]], // Email validation
    });
  }

  addEmail(): void {
    const email = this.emailForm.get('emailInput')?.value.trim();
    if (email && this.isValidEmail(email)) {
      // Add email to the list
      this.emails.push(email);
      this.emailForm.get('emailInput')?.reset(); // Clear the input
    } else {
      // Mark input as invalid if email format is wrong
      this.emailForm.get('emailInput')?.setErrors({ invalid: true });
    }
  }

  removeEmail(index: number): void {
    this.emails.splice(index, 1); // Remove email from the list
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}

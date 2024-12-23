import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  static users: { username: string; email: string; password: string }[] = []; // Static array to store user data

  constructor(private router: Router) {}

  onSignup() {
    if (!this.username || !this.email || !this.password) {
      alert('Please fill all the fields!');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      alert('Invalid email format!');
      return;
    }

    // if (!this.isValidPassword(this.password)) {
    //   alert('Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.');
    //   return;
    // }

    // Save the user data to the static array
    SignupComponent.users.push({
      username: this.username,
      email: this.email,
      password: this.password
    });

    console.log('Users:', SignupComponent.users);
    alert('Signup successful! Redirecting to login page...');
    this.router.navigate(['/login']); // Redirect to login page
  }

  // Static method to access users from other components
  static getUsers() {
    return this.users;
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }

  // Helper method to validate email
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Helper method to validate password
  private isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }
}

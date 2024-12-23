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
    if (this.username && this.email && this.password) {
      // Save the user data to the static array
      SignupComponent.users.push({
        username: this.username,
        email: this.email,
        password: this.password
      });

      console.log('Users:', SignupComponent.users);
      alert('Signup successful! Redirecting to login page...');
      this.router.navigate(['/login']); // Redirect to login page
    } else {
      alert('Please fill all the fields!');
    }
  }

  // Static method to access users from other components
  static getUsers() {
    return this.users;
  }
    goToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }
}

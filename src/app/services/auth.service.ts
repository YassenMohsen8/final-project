import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component'; // Import SignupComponent

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname: string, pword: string) {

    const users = SignupComponent.getUsers();
    const user = users.find(user => user.username === uname && user.password === pword);

    if(user){
      return 200; // Login successful
    }
    if (uname === 'yassen' && pword === '123') {
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['login']);
  }
}

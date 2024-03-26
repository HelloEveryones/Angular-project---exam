import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor (private userService:UserService, private router:Router) {}
submitHandler(form: NgForm): void {



  if (form.invalid) {
    return;
  }
  const {
    username,
    email,
    password,
    rePassword,
    age,
  } = form.value;

  this.userService
  .register(username,
    email,
    password,
    rePassword,
    age,)
  .subscribe(() => {
    this.router.navigate(['/login']);
  });
}
}
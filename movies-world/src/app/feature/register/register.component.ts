import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor (private userService:UserService) {}
submitHandler(form: NgForm): void {



  if (form.invalid) {
    return;
  }

  const { username, email, age, password , repeatPassword } = form.value;
  console.log(form.value);

  

}
}

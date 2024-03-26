import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  constructor(){}

  submitHandler(form: NgForm){
    if (form.invalid) {
      return;
    }
    const {} = form.value;
    console.log(form.value)
  }
}


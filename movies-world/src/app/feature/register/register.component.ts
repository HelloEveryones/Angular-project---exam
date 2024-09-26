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

  emailValidatorPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private userService: UserService, private router: Router) { }

  // Този метод обработва изпращането на формата при регистрация на потребителя.
  submitHandler(form: NgForm): void {
    // Ако формата е невалидна, прекратяваме изпълнението и не продължаваме с регистрацията.
    if (form.invalid) {
      return;
    }

    // Деструктурираме стойностите от формата, за да извлечем потребителско име, имейл, пароли и възраст.
    const {
      username,
      email,
      passwords,
      age,
    } = form.value;
    
    // Извикваме метода за регистрация от UserService, като подаваме необходимите данни.
    this.userService
      .register(username,
        email,
        passwords.password,
        passwords.rePassword,
        age,)
      .subscribe(() => {
        // След успешна регистрация пренасочваме потребителя към страницата за вход.
        this.router.navigate(['/login']);
      });
  }

}

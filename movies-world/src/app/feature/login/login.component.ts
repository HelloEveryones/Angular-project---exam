import { Component } from '@angular/core'; // Импорт на декоратора Component от Angular core модула
import { NgForm } from '@angular/forms'; // Импорт на NgForm от Angular forms модула
import { UserService } from '../services/user.service'; // Импорт на UserService от нашия сървис за потребителските функционалности
import { Router } from '@angular/router'; // Импорт на Router от Angular router модула

@Component({ // Декоратор за компонент
  selector: 'app-login', // Селектор за компонента
  templateUrl: './login.component.html', // Шаблон за компонента
  styleUrls: ['./login.component.css'] // Стилове за компонента
})
export class LoginComponent { // Клас за компонента
  constructor(private userService: UserService, private router: Router) {} // Конструктор за компонента, инжектиране на UserService и Router

  submitHandler(form: NgForm): void { // Метод за обработка на изпращането на формата за вход
    if (form.invalid) { // Проверка дали формата е невалидна
      return; // Ако е невалидна, спри изпълнението на метода
    }

    const { username, password } = form.value; // Извличане на стойностите за потребителско име и парола от формата

    this.userService.login(username, password).subscribe(() => { // Извикване на метода за вход в системата от UserService и абониране за резултата
      this.router.navigate(['/home']); // Пренасочване към началната страница след успешен вход
    });
  }
}

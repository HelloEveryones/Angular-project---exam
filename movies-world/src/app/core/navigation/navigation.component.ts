import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/feature/services/user.service';

@Component({
  selector: 'app-navigation', // Селекторът на компонента, който ще се използва в шаблона HTML
  templateUrl: './navigation.component.html', // Път до шаблона на компонента
  styleUrls: ['./navigation.component.css'] // Път до CSS стиловете на компонента
})
export class NavigationComponent {
  
  constructor(private userService: UserService, private router: Router) {} // Конструктор на компонента, който приема UserService и Router
  
  // Метод за проверка дали потребителят е в момента влезнал в системата
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn; // Връща стойността на isLoggedIn от UserService
  }

  // Метод за излизане на потребителя от системата
  logoutHandler(): void {
    this.userService.logout().subscribe({ // Извикване на метода logout() от UserService чрез HTTP заявка
      next: () => { // Ако заявката завърши успешно
        this.router.navigate(['/login']); // Пренасочване към страницата за вход
      },
      error: () => { // Ако възникне грешка при заявката
        this.router.navigate(['/login']); // Пренасочване към страницата за вход
      },
    });
  }
}

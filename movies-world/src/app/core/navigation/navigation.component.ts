import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/feature/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isMenuOpen = false; // Дефинираме променлива за бургер менюто

  constructor(private userService: UserService, private router: Router) {}

  // Метод за проверка дали потребителят е в момента влезнал в системата
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  // Метод за излизане на потребителя от системата
  logoutHandler(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.isMenuOpen = false; // Затваряме бургер менюто при изход
      },
      error: () => {
        this.router.navigate(['/login']);
        this.isMenuOpen = false;
      },
    });
  }

  // ✅ Метод за отваряне/затваряне на бургер менюто
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

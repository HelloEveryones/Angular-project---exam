// Импортиране на необходимите модули и услуги от Angular и вашето приложение
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../feature/services/user.service';

// Функцията canActivate, която се използва за активиране на маршрути в зависимост от условията
export const canActivate: CanActivateFn = (route, state) => {
  // Инжектиране на UserService и Router
  const userService = inject(UserService);
  const router = inject(Router);

  // Проверка дали потребителят е влезнал в системата (е ли влезнал в профила си)
  if (userService.isLoggedIn) {
    return true; // Ако е влезнал, връщаме true и позволяваме достъпа до маршрута
  }

  // Ако потребителят не е влезнал, пренасочваме го към страницата за грешка 404
  router.navigate(['/404']);
  return false; // Връщаме false, за да блокираме достъпа до маршрута
};

// Функцията canNotActivate, която се използва за блокиране на маршрути, когато потребителят е влезнал в системата
export const canNotActivate: CanActivateFn = (route, state) => {
  // Инжектиране на UserService и Router
  const userService = inject(UserService);
  const router = inject(Router);

  // Проверка дали потребителят НЕ е влезнал в системата
  if (!userService.isLoggedIn) {
    return true; // Ако потребителят не е влезнал, връщаме true и позволяваме достъпа до маршрута
  }

  // Ако потребителят е влезнал, пренасочваме го към страницата за грешка 404
  router.navigate(['/404']);
  return false; // Връщаме false, за да блокираме достъпа до маршрута
};

// Функцията canManipulate, която се използва за проверка дали потребителят има право да манипулира данните
export const canManipulate: CanActivateFn = (route, state) => {
  // Инжектиране на Router
  const router = inject(Router);

  // Проверка дали текущата навигация има допълнителна информация за собственост
  const isOwner = router.getCurrentNavigation()?.extras.state?.['isOwner'];

  // Проверка дали потребителят е собственик (има право да манипулира данните)
  if (isOwner) {
    return true; // Ако потребителят е собственик, връщаме true и позволяваме манипулирането на данните
  }

  return false; // Връщаме false, за да блокираме манипулирането на данните
};

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { MovieCreateComponent } from './feature/movie-create/movie-create.component';
import { MovieDetailsComponent } from './feature/movie-details/movie-details.component';
import { MovieEditComponent } from './feature/movie-edit/movie-edit.component';
import { MyProfileComponent } from './feature/my-profile/my-profile.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { canActivate, canManipulate, canNotActivate } from './core/guards/auth.guard';

// Дефиниране на маршрутите за приложението
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Първоначално пренасочване към /home
  { path: 'home', component: HomeComponent }, // Маршрут за началната страница
  { path: 'dashboard', component: DashboardComponent }, // Маршрут за таблото
  { path: 'login', component: LoginComponent, canActivate: [canNotActivate] }, // Маршрут за вход, защитен от гарда за неактивни потребители
  { path: 'register', component: RegisterComponent, canActivate: [canNotActivate] }, // Маршрут за регистрация, защитен от гарда за неактивни потребители
  { path: 'movie-create', component: MovieCreateComponent, canActivate: [canActivate] }, // Маршрут за създаване на филм, защитен от гарда за активни потребители
  { path: 'movie-details/:id', component: MovieDetailsComponent }, // Маршрут за подробности за филм по ID
  { path: 'movie-edit/:id', component: MovieEditComponent, canActivate: [canManipulate] }, // Маршрут за редактиране на филм по ID, защитен от гарда за манипулация
  { path: 'my-profile', component: MyProfileComponent, canActivate: [canActivate] }, // Маршрут за личния профил на потребителя, защитен от гарда за активни потребители
  { path: '404', component: ErrorPageComponent }, // Маршрут за страницата за грешки 404
  { path: '**', component: ErrorPageComponent } // Маршрут за непознати URL адреси
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Импортиране на маршрутите и конфигуриране на RouterModule
  exports: [RouterModule] // Изнасяне на RouterModule за използване в други модули
})
export class AppRoutingModule { } // Клас за настройка на маршрутите и техните настройки

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { MovieCreateComponent } from './feature/movie-create/movie-create.component';
import { MovieDetailsComponent } from './feature/movie-details/movie-details.component';
import { MovieEditComponent } from './feature/movie-edit/movie-edit.component';
import { MyProfileComponent } from './feature/my-profile/my-profile.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**', component: ErrorPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movie-create',component: MovieCreateComponent},
  {path: 'movie-details/:id', component: MovieDetailsComponent},
  {path: 'movie-edit/:id', component: MovieEditComponent},
  {path: 'my-profile', component: MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

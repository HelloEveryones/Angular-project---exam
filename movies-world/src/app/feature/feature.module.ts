import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,DashboardComponent,LoginComponent,RegisterComponent]
})
export class FeatureModule { }

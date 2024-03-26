import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    MovieCreateComponent,
    MovieDetailsComponent,
    MovieEditComponent,
    CommentComponent,
    ModalComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,RouterModule,SharedModule,FormsModule
  ],
  exports:[HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    MovieCreateComponent,
    MovieDetailsComponent,
    MovieEditComponent,
  CommentComponent, ModalComponent, MyProfileComponent]
})
export class FeatureModule { }

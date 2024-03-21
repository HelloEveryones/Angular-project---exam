import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NoMoviesComponent } from './no-movies/no-movies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NoMoviesComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[LoadingSpinnerComponent,NoMoviesComponent]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NoMoviesComponent } from './no-movies/no-movies.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NoMoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoadingSpinnerComponent,NoMoviesComponent]
})
export class SharedModule { }

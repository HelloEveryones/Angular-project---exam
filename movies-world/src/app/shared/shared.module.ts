import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NoMoviesComponent } from './no-movies/no-movies.component';
import { RouterModule, mapToCanDeactivate } from '@angular/router';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MatchPasswordsDirective } from './directives/match-passwords.directive';




@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NoMoviesComponent,
    ErrorMessageComponent,MatchPasswordsDirective
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[LoadingSpinnerComponent,NoMoviesComponent,ErrorMessageComponent,MatchPasswordsDirective]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';




@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[ NavigationComponent,
    FooterComponent,ErrorPageComponent]
})
export class CoreModule { }

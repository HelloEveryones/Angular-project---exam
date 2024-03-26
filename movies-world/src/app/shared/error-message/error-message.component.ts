import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit{
  apiError$ = this.errorService.apiError$$.asObservable();
  errorMsg = '';

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.apiError$.subscribe((err: any) => {
      this.errorMsg = err;
    });
  }
}


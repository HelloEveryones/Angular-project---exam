import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit, OnDestroy {
  apiError$ = this.errorService.apiError$$.asObservable(); // Поток от съобщения за грешки
  errorMsg = ''; // Променлива за съхранение на съобщението за грешка

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    // Подписване на компонента към потока с грешки
    this.apiError$.subscribe((err: any) => {
      // Обновяване на съобщението за грешка при получаване на нова грешка
      this.errorMsg = err?.error.message;
    });
  }

  ngOnDestroy(): void {
    // Изчистване на съобщението за грешка при унищожаване на компонента
    this.errorService.apiError$$.next(null);
  }
}

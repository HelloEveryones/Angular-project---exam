import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  
  // BehaviorSubject, който се използва за излъчване на съобщения за грешки
  apiError$$ = new BehaviorSubject(null);
  
  constructor() { }
  
  // Метод за задаване на съобщение за грешка
  setError(error: any): void {
    this.apiError$$.next(error);
  }
}

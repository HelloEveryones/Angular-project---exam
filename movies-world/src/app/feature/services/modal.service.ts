import { Injectable } from '@angular/core';
// Импортиране на нужните зависимости от Angular Core

import { BehaviorSubject, Observable } from 'rxjs';
// Импортиране на BehaviorSubject и Observable от RxJS, които ще се използват за управление на данните

@Injectable({
  providedIn: 'root'
})
// Означава, че този сервиз е предоставен на ниво на цялото приложение

export class ModalService {
  // Дефиниране на класа ModalService, който ще се използва за управление на модални прозорци
  
  private display$$: BehaviorSubject<string> = new BehaviorSubject('close');
  // Деклариране на частна променлива display$$ от тип BehaviorSubject, която ще държи текущото състояние на модалния прозорец

  watch(): Observable<string> {
    // Методът watch() връща Observable, който наблюдава състоянието на модалния прозорец
    return this.display$$.asObservable();
    // Връща BehaviorSubject като Observable
  }

  open() {
    // Метод за отваряне на модалния прозорец
    this.display$$.next('open');
    // Променя състоянието на модалния прозорец на "open"
  }

  close() {
    // Метод за затваряне на модалния прозорец
    this.display$$.next('close');
    // Променя състоянието на модалния прозорец на "close"
  }
}

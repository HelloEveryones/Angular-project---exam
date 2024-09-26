import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import { matchPasswordsValidator } from './match-password-validator';


// Директива за сравнение на пароли.
@Directive({
  selector: '[appAppMatchPasswords]', // Селектор за директивата
  providers: [{ provide: NG_VALIDATORS, useExisting: AppMatchPasswordsDirective, multi: true }] // Предоставяне на валидатора
})
export class AppMatchPasswordsDirective implements Validator {
  private valFn; // Приватно поле за валидатора

  constructor() {
    this.valFn =matchPasswordsValidator(); // Инициализация на валидатора
  }

  // Метод за валидиране на контрол
  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c); // Връща резултата от валидацията
  }
}

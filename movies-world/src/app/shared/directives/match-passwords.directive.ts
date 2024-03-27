import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { matchPasswordsValidator } from './match-password-validator';

@Directive({
  selector: '[appMatchPasswords]',
  providers:[{provide: NG_VALIDATORS, useExisting: MatchPasswordsDirective, multi: true}]
})
export class MatchPasswordsDirective implements Validator {
  private valFn;

  constructor() {
    this.valFn = matchPasswordsValidator();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }

}




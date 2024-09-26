import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

// Създаване на кастомен валидатор за сравнение на пароли.
export function matchPasswordsValidator(): ValidatorFn {
    // Връщане на функция, която се използва за проверка на входния контрол.
    return (control: AbstractControl) => {
        let isValid = false;
        // Проверка дали контролът съществува и дали е от тип FormGroup.
        if (control && control instanceof FormGroup) {
            // Конвертиране на контрола към FormGroup.
            let group = control as FormGroup;
            // Проверка дали съществуват контроли за парола и повторение на паролата.
            if (group.controls['password'] && group.controls['repeatPassword']) {
                // Проверка дали стойностите на полетата за парола и повторение съвпадат.
                isValid = group.controls['password'].value == group.controls['repeatPassword'].value;
            }
        }
        // Връщане на резултата от валидацията. 
        if (isValid) {
            return null; // Връща null, ако валидацията е успешна.
        } else {
            return { 'passwordCheck': 'failed' }; // Връща обект с ключ 'passwordCheck', ако валидацията не е успешна.
        }
    }
}

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static match(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsNotMatching: true };
  }
}

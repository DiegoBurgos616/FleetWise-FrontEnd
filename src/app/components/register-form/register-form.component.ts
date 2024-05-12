import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CustomValidators } from '../../_helpers/customValidators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  constructor(private authService: AuthService, private router: Router) {}

  registerForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}'),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    {
      validators: CustomValidators.match,
    }
  );

  register(): void {
    if (this.registerForm.valid) {
      this.authService
        .register({
          username: this.username.value,
          email: this.email.value,
          password: this.password.value,
        })
        .pipe(tap(() => this.router.navigate(['/login'])))
        .subscribe();
    }
    this.registerForm.reset();
  }

  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginCredentials } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly authService = inject(AuthService);

  readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials: LoginCredentials = this.loginForm.getRawValue();
    this.authService.login(credentials).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  // Slide alias for funIngresar()
  funIngresar(): void {
    this.login();
  }
}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, LoginCredentials } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public layoutService = inject(LayoutService);
  private readonly authService = inject(AuthService);
  private router = inject(Router);

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
        if (res.access_token) {
          this.authService.setToken(res.access_token);
          this.router.navigate(['/admin']);
        }
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

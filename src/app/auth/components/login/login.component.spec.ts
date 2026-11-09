import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with an invalid form', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should validate email and password inputs', () => {
    component.loginForm.controls.email.setValue('invalid-email');
    component.loginForm.controls.password.setValue('secret123');
    expect(component.loginForm.valid).toBeFalse();

    component.loginForm.controls.email.setValue('admin@mail.com');
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should call authService.login when form is valid', () => {
    authServiceSpy.login.and.returnValue(of({ token: 'mock-token' }));

    component.loginForm.controls.email.setValue('admin@mail.com');
    component.loginForm.controls.password.setValue('secret123');

    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith({
      email: 'admin@mail.com',
      password: 'secret123'
    });
  });
});

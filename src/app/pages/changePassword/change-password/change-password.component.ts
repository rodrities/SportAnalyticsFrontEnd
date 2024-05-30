import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { LoginResponse } from 'src/app/shared/Models/LoginResponse';
import { SignupRequest } from 'src/app/shared/Models/SignupRequest';
import { Service } from 'src/app/shared/service/service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  loginForm!: FormGroup;

  request: SignupRequest = new SignupRequest();
  loginResponse!: LoginResponse;
  visible: any = false;
  messages!: Message[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: Service
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.request.correo = this.loginForm.value.email;
    this.request.contraseña = this.loginForm.value.password;

    console.log(this.request);
    this.service.changePassword(this.request).subscribe(
      (response: any) => {
        console.log(response);

        this.loginResponse = response;
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al llamar al servicio:', error);
        this.addMessages(
          error.error.message != null
            ? error.error.message
            : error.error.response
        );
      }

      //this.service.getRutine().subscribe((response: any) => {
      //   console.log(response)
      //  }
      //
    );
  }

  addMessages(error: string) {
    this.messages = [{ severity: 'error', summary: error }];
  }
}

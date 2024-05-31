import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/shared/Models/SignupRequest';
import { Service } from 'src/app/shared/service/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  request: SignupRequest = new SignupRequest();

  formGroup2!: FormGroup;
  visible!: boolean;

  fontStyleControl = new FormControl('100m');

  paymentOptions: any[] = [
    { name: '100m', value: 1 },
    { name: '200m', value: 2 },
    { name: '400m', value: 3 },
    { name: '800m', value: 4 },
    { name: '1500m', value: 5 },
  ];
  value!: number;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: Service
  ) {}

  ngOnInit(): void {
    this.formGroup2 = new FormGroup({
      value: new FormControl('100m'),
    });

    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      height: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      commpetencia: [null],
    });
  }

  onSubmit(): void {
    console.log(this.value);

    this.request.objetivo = this.fontStyleControl.value!;

    this.request.correo = this.loginForm.value.email;
    this.request.contraseña = this.loginForm.value.password;
    this.request.nombre = this.loginForm.value.name;
    //this.request.objetivo = this.value
    console.log(this.request);
    this.service.signup(this.request).subscribe(
      (response: any) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Creación de cuenta',
          html: 'Cuenta creada correctamente',
        }).then((result) => {
          if (result.isConfirmed) {
            this.ok();
          }
        });
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear cuenta',
          html: 'Problema con el servidor',
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      }
    );
  }

  competenciaSeleccionada() {
    console.log('fasfasdsad');
  }
  showDialog() {
    console.log('adsasdasd');
    this.visible = true;
  }

  ok() {
    this.router.navigate(['/login']);
  }
}

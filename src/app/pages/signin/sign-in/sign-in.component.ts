import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/shared/Models/SignupRequest';
import { Service } from 'src/app/shared/service/service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  loginForm!: FormGroup;
  request: SignupRequest = new SignupRequest()

  formGroup2!: FormGroup;
    
    paymentOptions: any[] = [
        { name: '100m', value: '100m' },
        { name: '200m', value: '200m' },
        { name: '400m', value: '400m' },
        { name: '800m', value: '800m' },
        { name: '1500m', value: '1500m' }
    ];
    value: string = '100m';
  constructor(private formBuilder: FormBuilder
     , private router: Router
    , private service: Service){ }

  ngOnInit(): void {
    this.formGroup2 = new FormGroup({
      value: new FormControl('100m')
  });
    


    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      name: null,
      age: null,
      height: null,
      weight: null
    });

  }
  
  onSubmit(): void {
    this.request.correo = this.loginForm.value.email
    this.request.contraseña = this.loginForm.value.password
    this.request.nombre = this.loginForm.value.name
    this.request.objetivo = this.value
    console.log(this.request)
    this.service.signup(this.request).subscribe((response: any) => {
      console.log(response)
      
    }
    
    //this.service.getRutine().subscribe((response: any) => {
    //   console.log(response)
    //  }
//
    )
    this.router.navigate(['/login'])
  }
}

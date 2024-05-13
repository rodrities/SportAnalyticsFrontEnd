import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from 'src/app/shared/Models/Rutina';
import { Service } from 'src/app/shared/service/service';
import { GeneracionRutinaRequest } from 'src/app/shared/Models/GeneracionRutinaRequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rutinas: Rutina[] = []
  showSpinner = true
  userId: any  = localStorage.getItem('userId')
  private request: GeneracionRutinaRequest = new GeneracionRutinaRequest()
  private eRutina: Rutina = new Rutina
  
  constructor(
     private router: Router,
    private service: Service){ }
    value: number = 10;
      
  ngOnInit(): void {
    this.request.inputs = this.eRutina
    this.service.getRutines(this.userId ).subscribe((response: any) => {

      console.log(response)
      this.rutinas = response
      this.showSpinner = false
    })
  }

  verDetalle(rutina: any) {
    // Convertir el objeto rutina a formato JSON
    const rutinaJson = JSON.stringify(rutina);

    // Codificar el objeto JSON para pasar como parámetro en la URL
    const rutinaEncoded = encodeURIComponent(rutinaJson);

    // Redirigir a la otra página y pasar el objeto rutina como parámetro en la URL
    this.router.navigate(['/rutina'], { queryParams: { rutina: rutinaEncoded } });
  }

  generarRutina(): void {
    this.showSpinner = true
    this.service.generateRutina(this.userId, this.request).subscribe(
      (response: any) => {
        console.log(response);
        
        window.location.reload(); 
        this.showSpinner = false
      },
      (error: any) => {
        console.error('Error al generar la rutina:', error);
        this.showSpinner = false
      }
      
    );
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutina } from 'src/app/shared/Models/Rutina';
import { Service } from 'src/app/shared/service/service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit{
  

  rutina: Rutina = new Rutina
  competencia!: string
  fC!: number
  

  constructor(
    private router: Router,
   private service: Service,
   private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.competencia = localStorage.getItem('competencia')!
    // Obtener el parámetro rutina de la URL
    const rutinaEncoded = this.route.snapshot.queryParamMap.get('rutina');

    // Decodificar y convertir el objeto JSON de vuelta a un objeto JavaScript
    this.rutina = JSON.parse(decodeURIComponent(rutinaEncoded!));

    // Utilizar el objeto rutina según sea necesario
    console.log(this.rutina);
    this.fC = this.rutina.rutina_ejercicios[3].series[0].fre_cardiaca
    console.log(this.fC)
   //this.getRutina()
  }

  getRutina(): void {


    this.service.getRutine().subscribe((response: Rutina) => {
       console.log(response)
       this.rutina = response
       console.log(this.rutina)
       this.rutina.rutina_ejercicios.indexOf
      }

    )
    
  }

  getSeverity(status: string): any {
    switch (status) {
        case 'calentamiento':
            return 'danger';
        case 'drills':
            return 'warning';
        case 'sprints':
            return 'success';
        case 'recuperacion':
            return 'danger';
    }
}

verDetalle(rutina: any) {
  // Convertir el objeto rutina a formato JSON
  const rutinaJson = JSON.stringify(rutina);

  // Codificar el objeto JSON para pasar como parámetro en la URL
  const rutinaEncoded = encodeURIComponent(rutinaJson);

  // Redirigir a la otra página y pasar el objeto rutina como parámetro en la URL
  this.router.navigate(['/ejercicio'], { queryParams: { rutina: rutinaEncoded } });
}

}

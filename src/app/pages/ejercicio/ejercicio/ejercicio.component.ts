import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicio } from 'src/app/shared/Models/Ejercicio';
import { Rutina } from 'src/app/shared/Models/Rutina';
import { Service } from 'src/app/shared/service/service';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css'],
})
export class EjercicioComponent implements OnInit {
  events: EventItem[];
  ejercicios!: Ejercicio;
  tiemposConDescanso: string[];
  listSeries: number[];

  ejercicio: Ejercicio = new Ejercicio();

  arrayTiempos: number[] = [];
  mejorTiempo = 0;
  peorTiempo = 0;
  promedio = 0;
  frecuenciaP = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Service
  ) {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];
    this.ejercicios = {
      id: 1,
      nombre: '50',
      tipo: 'sprint',
      descripcion: '',
      cantidad_series: 6,
      intensidad: '95%',
      descanso: '2 minutos',
      frecuenciaCardiaca: [187, 189, 191, 193, 195, 197],
      promedioFrecuenciaCardiaca: 192,
      velocidad: [8.9, 9.1, 9.3, 9.5, 9.7, 9.9],
      promedioVelocidad: 9.4,
      tiempo: [
        '00:00:10',
        '00:00:11',
        '00:00:12',
        '00:00:13',
        '00:00:14',
        '00:00:15',
      ],
      tiempoDescanso: [
        '00:00:21',
        '00:00:20',
        '00:00:20',
        '00:00:20',
        '00:00:22',
        '00:00:20',
      ],
      series: [],
      ejercicio: new Ejercicio(),
    };

    this.tiemposConDescanso = this.intercalarTiempos(
      this.ejercicios.tiempo,
      this.ejercicios.tiempoDescanso
    );
    this.listSeries = Array.from(
      { length: this.ejercicios.cantidad_series },
      (_, index) => index + 1
    );
  }

  ngOnInit(): void {
    // Obtener el parámetro rutina de la URL
    const rutinaEncoded = this.route.snapshot.queryParamMap.get('rutina');

    // Decodificar y convertir el objeto JSON de vuelta a un objeto JavaScript
    this.ejercicio = JSON.parse(decodeURIComponent(rutinaEncoded!));

    // Utilizar el objeto rutina según sea necesario
    console.log(this.ejercicio);
    this.ejercicio.series.forEach((s) => {
      this.arrayTiempos.push(s.tiempo);
    });

    for (let i = 0; i <= this.ejercicio.series.length - 1; i++) {
      this.promedio = this.promedio + this.ejercicio.series[i].tiempo;
      this.frecuenciaP =
        this.frecuenciaP + this.ejercicio.series[i].fre_cardiaca;
      if (i == 0) {
        this.peorTiempo = this.ejercicio.series[i].tiempo;
        this.mejorTiempo = this.ejercicio.series[i].tiempo;
      } else {
        if (this.peorTiempo > this.ejercicio.series[i].tiempo)
          this.peorTiempo = this.ejercicio.series[i].tiempo;
        if (this.mejorTiempo < this.ejercicio.series[i].tiempo)
          this.mejorTiempo = this.ejercicio.series[i].tiempo;
      }
      if (i == this.ejercicio.series.length - 1) {
        this.promedio = this.promedio / this.ejercicio.series.length;
        this.frecuenciaP = this.frecuenciaP / this.ejercicio.series.length;
      }
    }
    //this.promedio = this.promedio / 3;
    //this.frecuenciaP = this.frecuenciaP / this.ejercicio.series.length;

    //this.getRutina()
  }

  intercalarTiempos(tiempo: string[], tiempoDescanso: string[]): string[] {
    const tiemposConDescanso: string[] = [];
    for (let i = 0; i < tiempo.length; i++) {
      tiemposConDescanso.push(tiempo[i]);
      tiemposConDescanso.push(tiempoDescanso[i]);
    }
    return tiemposConDescanso;
  }

  verDetalle(ejercicio: any) {
    // Convertir el objeto rutina a formato JSON
    //const rutinaJson = JSON.stringify(rutina);

    // Codificar el objeto JSON para pasar como parámetro en la URL
    // const rutinaEncoded = encodeURIComponent(rutinaJson);

    // Redirigir a la otra página y pasar el objeto rutina como parámetro en la URL
    this.router.navigate(['/hitorialEjercicio'], {
      queryParams: { ejercicio: ejercicio },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicio } from 'src/app/shared/Models/Ejercicio';
import { Serie } from 'src/app/shared/Models/Serie';
import { Service } from 'src/app/shared/service/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ejercicio-historial',
  templateUrl: './ejercicio-historial.component.html',
  styleUrls: ['./ejercicio-historial.component.css'],
})
export class EjercicioHistorialComponent implements OnInit {
  data: any;
  ejercicios!: Ejercicio[];
  options: any;
  ejercicios2!: Ejercicio[];
  serieList: Serie[] = [];
  media = 0;
  peorTiempo = 0;
  mejorTiempo = 0;
  ejercicio?: any;
  primeraMedia = 0;
  showSpinner = true;
  userId: any = localStorage.getItem('userId');
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: Service
  ) {}

  ngOnInit() {
    this.ejercicio = this.route.snapshot.queryParamMap.get('ejercicio');
    console.log(this.ejercicio);

    this.service.getEjercicios(this.userId, this.ejercicio!).subscribe(
      (response: any) => {
        console.log(response);
        this.ejercicios2 = response;
        let timeData = [];
        let labelsData = [];
        for (let i = 0; i < this.ejercicios2.length; i++) {
          for (let j = 0; j < this.ejercicios2[i].series.length; j++) {
            if (i == 0)
              this.primeraMedia =
                this.primeraMedia + this.ejercicios2[i].series[j].tiempo;
            timeData.push(this.ejercicios2[i].series[j].tiempo);
            labelsData.push('28/04/2024');
            this.media = this.media + this.ejercicios2[i].series[j].tiempo;
            if (i == 0) {
              this.peorTiempo = this.ejercicios2[i].series[j].tiempo;
              this.mejorTiempo = this.ejercicios2[i].series[j].tiempo;
            } else {
              if (this.ejercicios2[i].series[j].tiempo > this.peorTiempo)
                this.peorTiempo = this.ejercicios2[i].series[j].tiempo;
              if (this.ejercicios2[i].series[j].tiempo < this.mejorTiempo)
                this.mejorTiempo = this.ejercicios2[i].series[j].tiempo;
            }
            this.serieList.push(this.ejercicios2[i].series[j]);
          }
        }
        this.media = this.media / this.serieList.length;
        this.media;
        this.primeraMedia =
          this.primeraMedia / this.ejercicios2[0].series.length;
        this.data = {
          labels: labelsData,
          datasets: [
            {
              label: 'Tiempos',
              data: timeData,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--teal-500'),
              tension: 0.4,
            },
          ],
        };

        this.showSpinner = false;
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al obtener historial de ejercicios',
          html: 'Problema con el servidor',
        }).then((result) => {
          if (result.isConfirmed) {
          }
        });
      }
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.ejercicios = [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
    ];

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    this.spinnerTest();
  }

  public spinnerTest() {}
}

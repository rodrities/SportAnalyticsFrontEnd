import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  nombre = localStorage.getItem('user')!;
  competencia = localStorage.getItem('competencia')!;
}

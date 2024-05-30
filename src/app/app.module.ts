import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/login/log-in/log-in.component';


import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignInComponent } from './pages/signin/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RutinaComponent } from './pages/rutina/rutina/rutina.component';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TreeTableModule } from 'primeng/treetable';
import { EjercicioComponent } from './pages/ejercicio/ejercicio/ejercicio.component';
import { TimelineModule } from 'primeng/timeline';
import { EjercicioHistorialComponent } from './pages/ejercicio/ejercicio-historial/ejercicio-historial.component';
import { ChartModule } from 'primeng/chart';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KnobModule } from 'primeng/knob';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessagesModule } from 'primeng/messages';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios/ejercicios.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { ChangePasswordComponent } from './pages/changePassword/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    RutinaComponent,
    EjercicioComponent,
    EjercicioHistorialComponent,
    EjerciciosComponent,
    PerfilComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
 
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    TableModule,
    TagModule,
    TreeTableModule,
    TimelineModule,
    ChartModule,
    SelectButtonModule,
    KnobModule,
    ProgressSpinnerModule,
    DialogModule,
    ConfirmPopupModule,
    MessagesModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

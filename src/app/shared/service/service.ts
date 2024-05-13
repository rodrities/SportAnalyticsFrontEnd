import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { SignupRequest } from "../Models/SignupRequest";
import { Injectable } from "@angular/core";
import { LoginResponse } from "../Models/LoginResponse";
import { Rutina } from "../Models/Rutina";
import { GeneracionRutinaRequest } from "../Models/GeneracionRutinaRequest";

@Injectable({
    providedIn: 'root'
})
export class Service{

    constructor(private http: HttpClient) { 
    }


    public signup = (body: SignupRequest): Observable<String> => {
        return this.http.post<String>('https://api-backend-3nyg.onrender.com/api/auth/signup', body, this.generateHeaders());
    }

    public login = (body: SignupRequest): Observable<LoginResponse> => {
        return this.http.post<LoginResponse>('https://api-backend-3nyg.onrender.com/api/auth/login', body, this.generateHeaders());
    }

    public getRutine = (): Observable<any> => {
        return this.http.get<any>('https://api-backend-3nyg.onrender.com/api/rutinas', this.generateHeaders());
    }

    public getRutines = (id: Number): Observable<Array<Rutina>> => {
        return this.http.get<Array<Rutina>>(`https://api-backend-3nyg.onrender.com/api/rutinas/${id}`, this.generateHeaders());
    }

    public generateRutina = (id: string,  body: GeneracionRutinaRequest): Observable<Rutina> => {
        
        return this.http.post<Rutina>(`https://api-backend-3nyg.onrender.com/api/rutinas/${id}`, body , this.generateHeaders());
    }

    public getEjercicios = (id: Number, ejercicio: String): Observable<Rutina> => {
        const body = {};
        return this.http.get<Rutina>(`https://api-backend-3nyg.onrender.com/api/rutinas/atleta/${id}/ejercicios/${ejercicio}` , this.generateHeaders());
    }

    public getAllEjercicios = (id: Number): Observable<String> => {
        const body = {};
        return this.http.get<String>(`https://api-backend-3nyg.onrender.com/api/rutinas/ejercicios/${id}` , this.generateHeaders());
    }

     //GENERADOR DE HEADERS
     private generateHeaders = () => {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                
                //'Authorization': "Bearer " + sessionStorage.getItem("token"),
                //'Access-Control-Allow-Origin': 'https://deaorwhzisbsc.cloudfront.net'
            })
        }
    }
}

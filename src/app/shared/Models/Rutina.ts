import { Ejercicio } from "./Ejercicio"

export class Rutina {
    id!: string
    objetivo!:string
    fecha!: Date
    estado!: String
    rutina_ejercicios!: Array<Ejercicio>
    humedad_promedio!:string
    presion_promedio!:string
    temperatura_promedio!:string
    
}
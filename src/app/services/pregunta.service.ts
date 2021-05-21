import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta=0; 
  opcionSeleccionada : Respuesta;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number>= []; 
  public preguntas: Pregunta[]=[
    new Pregunta('¿Cual es la Capital de Ecuador?', [
      new Respuesta('Quito', 1),
      new Respuesta('Guayaquil', 0),
      new Respuesta('Cuenca', 0),
      new Respuesta('Riobamba', 0),
    ]),
    new Pregunta('¿En donde se encuentra ubicado el Malecón del Salado?', [
      new Respuesta('Quito', 0),
      new Respuesta('Guayaquil', 1),
      new Respuesta('Loja', 0),
      new Respuesta('Manta', 0),
    ]),
    new Pregunta('¿Cuál es la capital de la provincia del Azuay?', [
      new Respuesta('Tulcán', 0),
      new Respuesta('Quito', 0),
      new Respuesta('Ambato', 0),
      new Respuesta('Cuenca', 1),
    ]),
    new Pregunta('¿Cuántas provincias tiene el Ecuador?', [
      new Respuesta('10', 0),
      new Respuesta('25', 0),
      new Respuesta('24', 1),
      new Respuesta('28', 0),
    ]),
  ]
  constructor() { }
  getPreguntas(){
    return this.preguntas.slice(); 
  }
}

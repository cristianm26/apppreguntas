import { Respuesta } from './respuesta';
export class Pregunta {
    descripcionPregunta: string;
    respuesta: Respuesta[];
    constructor(descripcionPregunta: string, respuesta: Respuesta[]) {
        this.descripcionPregunta = descripcionPregunta;
        this.respuesta = respuesta;

    }
}
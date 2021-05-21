import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta!: Pregunta[];
  constructor(public _preguntasService: PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this._preguntasService.getPreguntas()
  }

  obtenerPregunta() {
    return this.listPregunta[this._preguntasService.indexPregunta].descripcionPregunta
  }
  respuestaSeleccionada(respuesta: Respuesta,  indexRta: number) {
    if (this._preguntasService.pregConfirmada === true) {
      return;
    }
    this._preguntasService.opcionSeleccionada = respuesta;
    this._preguntasService.deshabilitarBtn = false;
    this._preguntasService.indexRespuesta = indexRta;
  }
  addClassOption(respuesta: Respuesta) {
    // respuesta seleccionada y NO esta confirmada
    if (respuesta === this._preguntasService.opcionSeleccionada && !this._preguntasService.pregConfirmada) {
      return 'active text-light';
    }

    // respuesta CORRECTA y esta confirmada
    if (respuesta === this._preguntasService.opcionSeleccionada &&
      this._preguntasService.pregConfirmada &&
      this._preguntasService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    // respuesta es incorrecta y esta confirmada
    if (respuesta === this._preguntasService.opcionSeleccionada &&
      this._preguntasService.pregConfirmada &&
      this._preguntasService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }
  }

  iconCorrecta(respuesta: Respuesta) {
    if (respuesta === this._preguntasService.opcionSeleccionada && this._preguntasService.pregConfirmada && this._preguntasService.opcionSeleccionada.esCorrecta === 1) {
      return true
    } else {
      return false
    }
  }
  iconIncorrecta(respuesta: Respuesta){
    if (respuesta === this._preguntasService.opcionSeleccionada && this._preguntasService.pregConfirmada && this._preguntasService.opcionSeleccionada.esCorrecta === 0) {
      return true
    } else {
      return false
    }
  }
}

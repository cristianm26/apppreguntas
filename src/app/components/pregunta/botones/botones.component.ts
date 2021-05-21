import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PreguntaService } from '../../../services/pregunta.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  btnString = 'Aceptar';
  constructor(public _preguntaService: PreguntaService, private arouter: Router) { }

  ngOnInit(): void {
  }
  siguiente() {
    switch (this.btnString) {
      case 'Aceptar': {
        this._preguntaService.pregConfirmada = true;
        this.btnString = 'Siguiente';
        if (this._preguntaService.preguntas.length - 1 === this._preguntaService.indexPregunta) {
          this.btnString = 'Finalizar'
        }
        break;
      }
      case 'Siguiente': {
        this._preguntaService.indexPregunta++;
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.deshabilitarBtn = true;
        this._preguntaService.pregConfirmada = false;
        this.btnString = 'Aceptar';
        break;

      }
      case 'Finalizar': {
        this._preguntaService.respuestasUsuario.push(this._preguntaService.indexRespuesta);
        this._preguntaService.opcionSeleccionada = null;
        this._preguntaService.pregConfirmada = false;
        this._preguntaService.indexPregunta = 0;
        this.arouter.navigate(['/respuesta']);
      }

    }
  }

}

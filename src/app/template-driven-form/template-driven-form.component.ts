import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  public formularioUsuario: Object;

  constructor() { }

  ngOnInit() {

    this.formularioUsuario = {
      nombreCompleto: '',
      contacto: {

        correo: '',
        telefono: ''

      },
      terminosAceptados: false,
    }

  }

  private EnviarFormulariio(form: any) {
    console.log(form.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, FormBuilder } from '@angular/forms';

@Component({
    selector: 'reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    formularioUsuario: FormGroup;

    get correoControl(): FormControl {
        return this.formularioUsuario.get('contacto').get('correo') as FormControl;
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit() {

        this.crearFormulario();
        this.formularioUsuario.setValidators(this.RequeridosFn());
        this.formularioUsuario.updateValueAndValidity();
    }

    private crearFormulario() {
        this.formularioUsuario = new FormGroup({
            nombreCompleto: new FormControl(''),
            contacto: new FormGroup({

                correo: new FormControl('', Validators.email),
                telefono: new FormControl('')

            }),
            terminosAceptados: new FormControl('', Validators.required)
        });
    }

    RequeridosFn(): ValidatorFn {
        // El que retorne una funcion flecha permite que no pierda el contexto al ser invocada
        return () => {
            const nombreCompleto = this.formularioUsuario.get('nombreCompleto').value;
            const correo = this.formularioUsuario.get('contacto').get('correo').value;

            if (!nombreCompleto && correo)
                return { requerido: true }
            else
                return null
        }
    }

    private submitForm() {
        console.log(this.formularioUsuario);
    }

}

      // SECCION FORM BUILDER
      /*
      this.formularioUsuario = this.fb.group({
        nombreCompleto : '',
        contacto: this.fb.group({
            correo: ['', Validators.email],
            telefono: ''
        }),
        terminosAceptados: ['', Validators.required]
      })
      */

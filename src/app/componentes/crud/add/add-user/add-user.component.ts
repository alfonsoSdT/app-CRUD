import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formularioLogIn: FormGroup;
  usuarioIni:any;

  constructor(private _crudService: CrudService, private _route: Router) {
    this.obtenerUsuario();
    this.formularioLogIn = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required])
    }) 
   }

  ngOnInit(): void {
  }
  /**
   * Funcion que se encarga de llamar al servicio de CRUD y añade el cliente nuevo con los datos
   * que se recibe del formulario
   */
  addUsuario(){
    let idNuevo;
    idNuevo = this._crudService.obtenerElUltimoID() + 1;
    this._crudService.addUsuario(this.formularioLogIn.get("name")?.value, idNuevo, this.formularioLogIn.get("firstName")?.value, this.formularioLogIn.get('lastName')?.value, this.formularioLogIn.get("age")?.value, this.formularioLogIn.get("salary")?.value)
    this._route.navigate(['CRUD'])
  }
  /**
   * Funcion que se encarga de llamar al servicio y obtener el usuario iniciado
   */
  obtenerUsuario(){
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  }
  cerrarSesion(){
    this._crudService.cerrarSesion();
    this._route.navigate(['/']);
  }

}

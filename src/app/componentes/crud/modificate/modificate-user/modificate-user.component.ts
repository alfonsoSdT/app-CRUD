import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-modificate-user',
  templateUrl: './modificate-user.component.html',
  styleUrls: ['./modificate-user.component.css']
})
export class ModificateUserComponent implements OnInit {

  formularioLogIn: FormGroup;
  usuarioIni:any;

  constructor(private _crudService: CrudService, private _route: Router) {
    this.obtenerUsuario();
    this.formularioLogIn = new FormGroup({
      id: new FormControl('', [Validators.required]),
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
    this._crudService.addUsuario(this.formularioLogIn.get("name")?.value,this.formularioLogIn.get("id")?.value, this.formularioLogIn.get("firstName")?.value, this.formularioLogIn.get('lastName')?.value, this.formularioLogIn.get("age")?.value, this.formularioLogIn.get("salary")?.value)
    this._route.navigate(['CRUD'])
  }
  /**
   * Funcion que se encarga de llamar al servicio y obtener el usuario iniciado
   */
  obtenerUsuario(){
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  }

}

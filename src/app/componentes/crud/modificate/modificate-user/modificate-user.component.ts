import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-modificate-user',
  templateUrl: './modificate-user.component.html',
  styleUrls: ['./modificate-user.component.css']
})
export class ModificateUserComponent implements OnInit {

  formularioLogIn: FormGroup;
  usuarioIni:any;
  id: any;
  cliente: any;
  clienteJson: any;

  constructor(private _crudService: CrudService, private _route: Router, private route: ActivatedRoute) {
    this.obtenerUsuario();

    this.id = this.route.snapshot.paramMap.get('id');

    this.obtenerDatosDelCliente();

    this.formularioLogIn = new FormGroup({
      firstName: new FormControl(this.clienteJson.first_name, [Validators.required]),
      lastName: new FormControl(this.clienteJson.last_name, [Validators.required]),
      name: new FormControl(this.clienteJson.name, [Validators.required]),
      age: new FormControl(this.clienteJson.age, [Validators.required]),
      salary: new FormControl(this.clienteJson.salary, [Validators.required])
    });
    
    
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
  /**
   * Funcion que se encarga de obtener los datos del cliente que se esta modificando
   */
  obtenerDatosDelCliente(){
    this.cliente = this._crudService.obtenerUsuario(this.id);
    this.clienteJson = JSON.parse(this.cliente);
    console.log(this.clienteJson);
  }
  /**
   * Funcion que se encarga de llamar al service para cerrar la sesion y navegar al logIn
   */
  cerrarSesion(){
    this._crudService.cerrarSesion();
    this._route.navigate(['/']);
  }
}

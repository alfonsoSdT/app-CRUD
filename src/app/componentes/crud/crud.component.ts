import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent{
  usuarioIni: any;
  userJson: any;
  usuarios = new Array(4); //Lista de usuarios del localStorage (formato JSON)
  data:any;

  constructor(private _crudService: CrudService, private _route: Router) { 
    this.obtenerUsuarioIniciado();
    this.mostrarUsuarios();
  }

  
  /**
   * Funcion que sirve para navegar al componente add-user.
   */
  addUsuario(){
    this._route.navigate(['/CRUD/add']);
  }
  /**
   * Funcion que llama a servicio para obtener los datos de los clientes mockeados y guardarlos en data
   */
  mostrarUsuarios(){
    this.data = JSON.parse(this._crudService.mostrarUsuarios()); 
  }
  /**
   * Funcion que llama al servicio para obtener el nombre del usuario que ha iniciado sesion
   */
  obtenerUsuarioIniciado(){
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  }
  /**
   * Funcion que se encarga de eliminar el usuario dado un id que se pasa por parametro
   * @param id id del usuario
   */
  eliminarUsuario(id: number){
    this._crudService.eliminarUsuario(id);
    this.mostrarUsuarios();
  } 
  modificarUsuario(id: number){
    this._route.navigate(['/CRUD/mod/' + id])
  }
  cerrarSesion(){
    this._crudService.cerrarSesion();
    this._route.navigate(['/']);
  }
}

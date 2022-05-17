import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent{
  usuarioIni!: string | null;
  userJson: any;
  usuarios = new Array(4); //Lista de usuarios del localStorage (formato JSON)
  data:any;

  constructor(private _crudService: CrudService, private _route: Router) { 
    this.getUserLoggedIn();
    this.getUsers();
  }

  
  /**
   * Navegates to add-user
   */
  addUser():void{
    this._route.navigate(['/crud/add']);
  }
  /**
   * Gets into data all the clients mocked
   */
  getUsers():void{
    this.data = JSON.parse(this._crudService.mostrarUsuarios()); 
  }
  /**
   * Get the name of the user logged in
   */
  getUserLoggedIn():void{
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  }
  /**
   * Eliminates the client with a given id
   * @param id of the client
   */
  deleteUser(id: number):void{
    this._crudService.eliminarUsuario(id);
    this.getUsers();
  }
  /**
   * Navegate to modificate-user with the id of the client
   * @param id of the user to update
   */
  updateUser(id: number):void{
    this._route.navigate([`/crud/edit/${id}`])
  }
  /**
   * Closes de Session by calling the crudService and navegate to de LogIn 
   */
  closeSession():void{
    this._crudService.cerrarSesion();
    this._route.navigate(['/']);
  }
}

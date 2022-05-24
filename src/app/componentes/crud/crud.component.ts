import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent{
  usuarioIni: string | null = null;
  userJson: JSON | null = null;
  data!:any ;

  constructor(private _crudService: CrudService,private _loginService: LoginService, private _route: Router) { 
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
    this.data = JSON.parse(this._crudService.getUsers()); 
  }
  /**
   * Get the name of the user logged in
   */
  getUserLoggedIn():void{
    this.usuarioIni = this._loginService.getUserLog();
  }
  /**
   * Deletes the client with a given id
   * @param id of the client
   */
  deleteUser(id: number):void{
    this._crudService.deleteUser(id);
    this.getUsers();
  }
  /**
   * Navegate to modificate-user with the id of the client
   * @param id of the user to update
   */
  updateUser(id: number):void{
    this._route.navigate([`/crud/edit/${id}`])
  }
  
}

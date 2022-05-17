import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{
  formularioLogIn: FormGroup;
  usuarioIni: string|null = null;

  constructor(private _crudService: CrudService, private _route: Router) {
    this.getUserLogIn();
    this.formularioLogIn = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required])
    }) 
   }
  /**
   * Calls the service to add the client and navegate to the crud component
   */
  createUser(){
    let idNew;
    idNew = this._crudService.obtenerElUltimoID() + 1;

    

    this._crudService.addUsuario(this.formularioLogIn.get("name")?.value, idNew, this.formularioLogIn.get("firstName")?.value, this.formularioLogIn.get('lastName')?.value, this.formularioLogIn.get("age")?.value, this.formularioLogIn.get("salary")?.value)
    this._route.navigate(['crud']);
  }
  /**
   * Get the name of the user logged in
   */
  getUserLogIn(){
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  }
  /**
   * Closes de Session by calling the crudService and navegate to de LogIn 
   */
  closeSession(){
    this._crudService.cerrarSesion();
    this._route.navigate(['/']);
  }

}

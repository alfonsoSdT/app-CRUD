import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { Client } from 'src/app/modelo/client';

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
    idNew = this._crudService.getLastID() + 1;

    let h: Client = {
      id: idNew,
      name: this.formularioLogIn.get("name")?.value,
      firstName: this.formularioLogIn.get("firstName")?.value,
      lastName: this.formularioLogIn.get('lastName')?.value,
      age: this.formularioLogIn.get("age")?.value,
      salary: this.formularioLogIn.get("salary")?.value
    };

    this._crudService.addUser(h);

    this._route.navigate(['crud']);
  }
  /**
   * Get the name of the user logged in
   */
  getUserLogIn(){
    this.usuarioIni = this._crudService.getUserLogIn();
  }


}

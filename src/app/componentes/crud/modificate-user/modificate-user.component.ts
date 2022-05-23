import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/modelo/client';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-modificate-user',
  templateUrl: './modificate-user.component.html',
  styleUrls: ['./modificate-user.component.css']
})
export class ModificateUserComponent{

  formularioLogIn: FormGroup;
  usuarioIni!: string | null;
  id!: string | null ;
  clienteJson: any;

  constructor(private _crudService: CrudService, private _route: Router, private route: ActivatedRoute) {
    this.getUserLogIn();

    this.id = this.route.snapshot.paramMap.get('id');

    this.getUser();

    this.formularioLogIn = new FormGroup({
      firstName: new FormControl(this.clienteJson.firstName, [Validators.required]),
      lastName: new FormControl(this.clienteJson.lastName, [Validators.required]),
      name: new FormControl(this.clienteJson.name, [Validators.required]),
      age: new FormControl(this.clienteJson.age, [Validators.required]),
      salary: new FormControl(this.clienteJson.salary, [Validators.required])
    });    
   }
  /**
   * Get the name of the user logged in
   */
  getUserLogIn():void{
    this.usuarioIni = this._crudService.getUserLogIn();
  } 
  /**
   * Get JSON of the user according to the ID
   */
  getUser():void{
    let cliente, i;
    i = this.id;
    if(this.id != null){
      cliente = this._crudService.getUser(+this.id);
      this.clienteJson = JSON.parse(cliente);
    }
    
  }
  /**
   * Update the user and save all the new information
   */
  updateUser():void{
    if(this.id != null){
      let client: Client = {
        id: +this.id,
        name: this.formularioLogIn.get("name")?.value,
        firstName: this.formularioLogIn.get("firstName")?.value,
        lastName: this.formularioLogIn.get('lastName')?.value,
        age: this.formularioLogIn.get("age")?.value,
        salary: this.formularioLogIn.get("salary")?.value
      };
      this._crudService.editUser(client)
      this._route.navigate(['crud'])
    }
    
  }
 
}

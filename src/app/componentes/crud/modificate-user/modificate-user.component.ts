import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-modificate-user',
  templateUrl: './modificate-user.component.html',
  styleUrls: ['./modificate-user.component.css']
})
export class ModificateUserComponent{

  formularioLogIn: FormGroup;
  usuarioIni!: string | null;
  id: any;
  clienteJson: any;

  constructor(private _crudService: CrudService, private _route: Router, private route: ActivatedRoute) {
    this.getUserLogIn();

    this.id = this.route.snapshot.paramMap.get('id');

    this.getUser();

    this.formularioLogIn = new FormGroup({
      firstName: new FormControl(this.clienteJson.first_name, [Validators.required]),
      lastName: new FormControl(this.clienteJson.last_name, [Validators.required]),
      name: new FormControl(this.clienteJson.name, [Validators.required]),
      age: new FormControl(this.clienteJson.age, [Validators.required]),
      salary: new FormControl(this.clienteJson.salary, [Validators.required])
    });    
   }
  /**
   * Get the name of the user logged in
   */
  getUserLogIn():void{
    this.usuarioIni = this._crudService.obtenerUsuarioIniciado();
  } 
  /**
   * Get JSON of the user according to the ID
   */
  getUser():void{
    let cliente, i;
    i = +this.id;
    cliente = this._crudService.obtenerUsuario(i);
    this.clienteJson = JSON.parse(cliente);
  }
  /**
   * Update the user and save all the new information
   */
  updateUser():void{
    let i;
    i = +this.id;
    this._crudService.modificarUsuario(i, this.formularioLogIn.get("name")?.value,this.formularioLogIn.get("firstName")?.value, this.formularioLogIn.get('lastName')?.value, this.formularioLogIn.get("age")?.value, this.formularioLogIn.get("salary")?.value)
    this._route.navigate(['CRUD'])
  }
  /**
   * Closes de Session by calling the crudService and navegate to de LogIn 
   */
  closeSession():void{
    this._crudService.cerrarSesion();
    this._route.navigate(['/']);
  }
}

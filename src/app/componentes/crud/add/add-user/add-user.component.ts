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

  constructor(private _crudService: CrudService, private _route: Router) {
    this.formularioLogIn = new FormGroup({
      id: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.required,Validators.maxLength(15)]),
      age: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required])
    }) 
   }

  ngOnInit(): void {
  }
  onSubmit(){
    //Añadir el usuario el localStorage
    this.addUsuario;
    //Ver si esta
    console.log(localStorage.getItem('usuario_id:25' ));
    //Volvemos a la tabla con todos los usuarios
    
  }
  /**
   * Funcion que se encarga de llamar al servicio de CRUD y añade el usuario al localStorage
   */
  addUsuario(){
    console.log(this.formularioLogIn)
    this._crudService.addUsuario(this.formularioLogIn.get("name")?.value,this.formularioLogIn.get("password")?.value, this.formularioLogIn.get("id")?.value, this.formularioLogIn.get("firstName")?.value, this.formularioLogIn.get("age")?.value, this.formularioLogIn.get("salary")?.value)
    
  }

}
